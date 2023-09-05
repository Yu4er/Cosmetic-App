import React from "react";

import style from "./Table.module.scss";
import { TableHead } from "./TableHead";
import { RowTable } from "./components/RowTable/RowTable";
import { Pagination } from "./components/Pagination/Pagination";
import { TablePopUp } from "./components/TablePopUp/TablePopUp";

import type { ITableColumnsProps } from "../../../interfaces/tableColumns";
import type { IProductData } from "../../../interfaces/mockInterfaces";

import { productsMockData } from "../../../mocks/productsMockData";
import { usePagination } from "../../../hooks/usePagination";
import { useTableCheckbox } from "../../../hooks/useTableCheckbox";

//TODO удалить стили после наполнения компонента
const styles = {
  maxWidth: 1000,
  marginInline: "auto",
  padding: 24,
  borderRadius: 24,
  boxShadow: "-5px 1px 15px 0px rgba(0, 0, 0, 0.05)",
};

export function Table(): JSX.Element {
  //TODO удалить моковые данные
  const data = productsMockData;
  const lastPage = 20;

  const columns: ITableColumnsProps[] = [
    {
      name: "Название",
      selector: (row) => row.nameFrom1C,
    },
    {
      name: "Артикул",
      selector: (row) => row.codeFrom1C,
    },
  ];

  const { pagination, handleLimitChange, handleChangePage } = usePagination({
    lastPage,
  });

  const {
    handleAllClick,
    isAllChecked,
    checkboxHandler,
    deleteCellTable,
    checkedItemsArray,
    openPopup,
    PopUpToggle,
  } = useTableCheckbox(data);

  return (
    <div style={styles}>
      <div className={style["table-block__header"]}>
        <Pagination
          lastPage={lastPage}
          pagination={pagination}
          handleLimitChange={handleLimitChange}
          handleChangePage={handleChangePage}
        />
      </div>
      <div className={style["table-block__content"]}>
        {data.length > 0 ? (
          <>
            <table className={style["content-sales-table"]}>
              <TableHead
                handleAllClick={handleAllClick}
                isChecked={isAllChecked}
                theadList={columns.map((i) => i.name)}
              />
              <tbody className={style["content-sales-table__body"]}>
                {data.map((item: IProductData, index) => {
                  const isChecked = checkedItemsArray.includes(item.id);
                  return (
                    <RowTable
                      key={`id-${index}${Math.random()}`}
                      dataRow={item}
                      columns={columns}
                      checkboxHandler={checkboxHandler}
                      isChecked={isChecked}
                    />
                  );
                })}
              </tbody>
            </table>
            {openPopup && (
              <TablePopUp
                openPopup={openPopup}
                PopUpToggle={PopUpToggle}
                checkedItemsArray={checkedItemsArray}
                deleteCellTable={deleteCellTable}
              ></TablePopUp>
            )}
          </>
        ) : (
          <div className="errorText">Здесь пока нет товаров</div>
        )}
      </div>
    </div>
  );
}
