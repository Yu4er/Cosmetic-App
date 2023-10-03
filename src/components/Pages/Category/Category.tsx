import React, { useEffect, useState } from "react";

import style from "./Category.module.scss";
import { ButtonBlock } from "./components/ButtonBlock/ButtonBlock";
import { InnerContentTable } from "./components/InnerContentTable/InnerContentTable";

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
  const [position, setPosition] = useState<number>();

  const [searchStringCatalog, setSearchStringCatalog] = useState<string>("");
  const [searchStringSubCatalog, setSearchStringSubCatalog] =
    useState<string>("");

  function selectCategory(position: number) {
    setPosition(position);
  }

  useEffect(() => {
    dispatch(fetchLoadCatalog({}));
  }, [dispatch, searchStringCatalog]);

  useEffect(() => {
    dispatch(
      fetchLoadSubCatalog({
        position: position,
      })
    );
  }, [dispatch, searchStringSubCatalog, position]);

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
        {subCatalog.length > 0 ? (
          <div className={style["category__table table"]}>
            <ButtonBlock
              text={"Добавить подкатегорию"}
              placeholder={"Введите название подкатегории"}
              searchString={searchStringSubCatalog}
              setSearchString={setSearchStringSubCatalog}
            />
            <InnerContentTable data={subCatalog} />
          </div>
        ) : (
          <div className="errorCenter">Выберите категорию</div>
        )}
      </div>
    </div>
  );
}
