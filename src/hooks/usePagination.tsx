import { useState } from "react";

interface IUsePaginationProps {
  lastPage: number;
}

const INITIAL_PAGE = 1;
const INITIAL_LIMIT = 10;

export function usePagination({ lastPage }: IUsePaginationProps) {
  const [pagination, setPagination] = useState(INITIAL_PAGE);
  const [limitRows, setLimitRows] = useState(INITIAL_LIMIT);

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = +e.target.value;
    setLimitRows(value);
    setPagination(INITIAL_PAGE);
  };

  function handleChangePage(e: React.MouseEvent<HTMLElement>) {
    switch (e.currentTarget.dataset.page) {
      case "-": {
        if (pagination > 1) {
          setPagination((prev) => prev - 1);
        }
        break;
      }
      case "+": {
        if (pagination < lastPage) {
          setPagination((prev) => prev + 1);
        }
        break;
      }
    }
  }

  return {
    pagination,
    limitRows,
    handleLimitChange,
    handleChangePage,
  };
}
