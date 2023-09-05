import { useState } from "react";

interface IUsePaginationProps {
  lastPage: number;
}

export function usePagination({ lastPage }: IUsePaginationProps) {
  const [pagination, setPagination] = useState(1);
  const [limitRows, setLimitRows] = useState(10);

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = +e.target.value;
    setLimitRows(value);
    setPagination(1);
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
