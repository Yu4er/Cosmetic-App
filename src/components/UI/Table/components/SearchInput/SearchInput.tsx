import React, { useCallback } from "react";

import style from "./SearchInput.module.scss";

interface ISearchInputProps {
  clearSearch: () => void;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
}

export function SearchInput({
  clearSearch,
  setSearchValue,
  searchValue,
}: ISearchInputProps): JSX.Element {
  const handleInput = useCallback(
    (event: React.SyntheticEvent<HTMLInputElement>) => {
      setSearchValue((event.target as HTMLInputElement).value);
    },
    [setSearchValue]
  );

  function handleClick() {
    clearSearch();
  }

  return (
    <div className={style["pagination__search"]}>
      <input
        onChange={handleInput}
        className={style["search"]}
        placeholder="Поиск"
        value={searchValue}
      ></input>
      <button
        title="clear search"
        type="button"
        className={style["delete"]}
        onClick={handleClick}
      ></button>
    </div>
  );
}
