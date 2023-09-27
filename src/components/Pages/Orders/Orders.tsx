import React, { useEffect } from "react";

import style from "../../UI/Table/Table.module.scss";
import { useSearch } from "../../../hooks/useSearch";
import { usePagination } from "../../../hooks/usePagination";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ITableColumnsProps } from "../../../interfaces/tableColumns";
import { Pagination } from "../../UI/Table/components/Pagination/Pagination";
import { TableHead } from "../../UI/Table/TableHead";
import { RowTable } from "../../UI/Table/components/RowTable/RowTable";
import { IOrdersData } from "../../../interfaces/mockInterfaces";
import { SearchInput } from "../../UI/Table/components/SearchInput/SearchInput";
import { ordersSelectors } from "../../../store/features/orderSlice/selectors";
import { fetchLoadOrders } from "../../../store/features/orderSlice/thunks";

const columns: ITableColumnsProps[] = [
  {
    name: "Покупатель",
    selector: (row) => {
      return row.user.lastName
        ? row.user.name + " " + row.user.lastName
        : row.user.name;
    },
  },
  {
    name: "Номер заказа",
    selector: (row) => row.order_number,
  },
  {
    name: "Способ получения",
    selector: (row) => row.delivery_type,
  },
  {
    name: "Дата оформления",
    selector: (row) => row.date,
  },
  {
    name: "Сумма заказа",
    selector: (row) => row.total,
  },
  {
    name: "Оплачено",
    selector: (row) => {
      return row.isPayed ? "Оплачено" : "Не оплачено";
    },
  },
];

export function Orders() {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(ordersSelectors.ordersDataSelector);
  const lastPage = useAppSelector(ordersSelectors.ordersLastPageSelector);

  const { pagination, limitRows, handleLimitChange, handleChangePage } =
    usePagination({ lastPage });

  const { setSearchValue, clearSearch, debouncedSearchTerm, searchValue } =
    useSearch();

  const renderTable = () => {
    if (orders.length === 0) {
      return <div className="errorText">Здесь пока нет заказов</div>;
    }

    return (
      <table className={style["content-sales-table"]}>
        <TableHead theadList={columns.map((i) => i.name)} />
        <tbody className={style["content-sales-table__body"]}>
          {orders.map((item: IOrdersData, index: number) => {
            return (
              <RowTable
                key={`id-${index}${Math.random()}`}
                dataRow={item}
                columns={columns}
              />
            );
          })}
        </tbody>
      </table>
    );
  };

  useEffect(() => {
    dispatch(
      fetchLoadOrders({
        limitRowsOnPage: limitRows,
        paginationObj: pagination,
        searchString: debouncedSearchTerm,
      })
    );
  }, [dispatch, limitRows, pagination, debouncedSearchTerm]);

  return (
    <>
      <div className={style["table-block__header"]}>
        <SearchInput
          clearSearch={clearSearch}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        <Pagination
          lastPage={lastPage}
          pagination={pagination}
          handleLimitChange={handleLimitChange}
          handleChangePage={handleChangePage}
        />
      </div>
      <div className={style["table-block__content"]}>{renderTable()}</div>
    </>
  );
}
