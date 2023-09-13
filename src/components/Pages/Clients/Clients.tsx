import React, { useEffect } from "react";

import style from "../../UI/Table/Table.module.scss";
import { useSearch } from "../../../hooks/useSearch";
import { usePagination } from "../../../hooks/usePagination";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ITableColumnsProps } from "../../../interfaces/tableColumns";
import { Pagination } from "../../UI/Table/components/Pagination/Pagination";
import { TableHead } from "../../UI/Table/TableHead";
import { RowTable } from "../../UI/Table/components/RowTable/RowTable";
import { IUsersData } from "../../../interfaces/mockInterfaces";
import { SearchInput } from "../../UI/Table/components/SearchInput/SearchInput";
import { fetchLoadUsers } from "../../../store/features/userSlice/thunks";
import { usersSelectors } from "../../../store/features/userSlice/selectors";

export function Clients() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(usersSelectors.usersDataSelector);
  const lastPage = useAppSelector(usersSelectors.usersLastPageSelector);

  const columns: ITableColumnsProps[] = [
    {
      name: "ФИ",
      selector: (row) => {
        return row.name + " " + row.lastName;
      },
    },
    {
      name: "Почта",
      selector: (row) => row.email,
    },
    {
      name: "Телефон",
      selector: (row) => row.phone,
    },
  ];

  const { pagination, limitRows, handleLimitChange, handleChangePage } =
    usePagination({ lastPage });

  const { setSearchValue, clearSearch, debouncedSearchTerm, searchValue } =
    useSearch();

  const renderTable = () => {
    if (users.length === 0) {
      return (
        <div className={style["errorText"]}>Здесь пока нет пользователей</div>
      );
    }

    return (
      <table className={style["content-sales-table"]}>
        <TableHead theadList={columns.map((i) => i.name)} />
        <tbody className={style["content-sales-table__body"]}>
          {users.map((item: IUsersData, index: number) => {
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
      fetchLoadUsers({
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
