import { useEffect, useState } from "react";

import { IProductData } from "../interfaces/mockInterfaces";

export function useTableCheckbox(data: IProductData[]) {
  const [checkedItemsArray, setCheckedItemsArray] = useState<string[]>([]);
  const [openPopup, setOpenPopup] = useState(false);
  function deleteCellTable() {
    for (let i = 0; i < data.length; i++) {
      if (checkedItemsArray.includes(data[i].id)) {
        data.splice(i, 1);
        i--;
      }
    }
    setCheckedItemsArray([]);
  }

  function PopUpToggle() {
    setOpenPopup((prev) => !prev);
  }

  const isAllChecked =
    checkedItemsArray.length > 0 && checkedItemsArray.length === data.length;

  function checkboxHandler(id: string) {
    setCheckedItemsArray((prev) => {
      return prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
    });
  }

  function handleAllClick() {
    const newArr = data.map((item) => item.id);

    if (newArr.length === checkedItemsArray.length) {
      return setCheckedItemsArray([]);
    }
    setCheckedItemsArray(newArr);
  }
  useEffect(() => {
    if (checkedItemsArray.length === 0) {
      setOpenPopup(false);
    } else {
      setOpenPopup(true);
    }
  }, [checkedItemsArray]);
  return {
    handleAllClick,
    checkboxHandler,
    isAllChecked,
    deleteCellTable,
    checkedItemsArray,
    PopUpToggle,
    openPopup,
  };
}
