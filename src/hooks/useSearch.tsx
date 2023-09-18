import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "@reactuses/core";

export function useSearch() {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchTerm = useDebounce(searchValue, 500);

  function searchingHandler(searchingValue: string) {
    const value = searchingValue.toLowerCase().trim();
    setSearchValue(value);
  }

  const clearSearch = useCallback(() => {
    if (searchValue !== "") {
      setSearchValue("");
    }
  }, [searchValue]);

  useEffect(() => {
    if (debouncedSearchTerm.length > 0) {
      return searchingHandler(debouncedSearchTerm);
    } else {
      setSearchValue("");
    }
  }, [debouncedSearchTerm]);

  return {
    debouncedSearchTerm,
    setSearchValue,
    clearSearch,
    searchValue,
  };
}
