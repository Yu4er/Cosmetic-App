import React, { useEffect, useState } from "react";

import style from "./Category.module.scss";
import { ButtonBlock } from "./components/ButtonBlock/ButtonBlock";
import { InnerContentTable } from "./components/InnerContentTable/InnerContentTable";

import type { ISubCatalogData } from "../../../interfaces/mockInterfaces";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { categorySelectors } from "../../../store/features/categorySlice/selectors";
import {
  fetchLoadCatalog,
  fetchLoadSubCatalog,
} from "../../../store/features/categorySlice/thunks";

export function Category() {
  const dispatch = useAppDispatch();
  const catalog = useAppSelector(categorySelectors.catalogDataSelector);
  const subCatalog = useAppSelector(categorySelectors.subCatalogDataSelector);
  const [position, setPosition] = useState<number | null>();
  const [subData, setSubData] = useState<ISubCatalogData[]>([]);

  const [searchStringCatalog, setSearchStringCatalog] = useState<string>("");
  const [searchStringSubCatalog, setSearchStringSubCatalog] =
    useState<string>("");

  function selectCategory(position: number) {
    dispatch(fetchLoadSubCatalog({}));
    setPosition(position);
  }

  useEffect(() => {
    const loadCatalog = async () => {
      await dispatch(
        fetchLoadCatalog({
          searchString: searchStringCatalog,
        })
      );
    };

    const loadSubCatalog = async () => {
      await dispatch(
        fetchLoadSubCatalog({
          searchString: searchStringSubCatalog,
        })
      );
    };

    if (position === null) {
      setSubData([]);
    } else {
      setSubData(subCatalog.filter((item) => item.position === position));
      loadSubCatalog();
    }

    loadCatalog();
  }, [
    dispatch,
    searchStringCatalog,
    searchStringSubCatalog,
    subCatalog,
    position,
  ]);

  return (
    <div className={style["category"]}>
      <div className={style["category__container"]}>
        <div className={style["category__table table"]}>
          <ButtonBlock
            text={"Добавить категорию"}
            placeholder={"Введите название категории"}
            searchString={searchStringCatalog}
            setSearchString={setSearchStringCatalog}
          />
          <InnerContentTable data={catalog} callback={selectCategory} />
        </div>
        {subData.length > 0 ? (
          <div className={style["category__table table"]}>
            <ButtonBlock
              text={"Добавить подкатегорию"}
              placeholder={"Введите название подкатегории"}
              searchString={searchStringSubCatalog}
              setSearchString={setSearchStringSubCatalog}
            />
            <InnerContentTable data={subData} />
          </div>
        ) : (
          <div className="errorCenter">Выберите категорию</div>
        )}
      </div>
    </div>
  );
}
