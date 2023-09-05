import React from "react";

import style from "../TheadCheckbox/TableCheckboxes.module.scss";

interface IRowCheckbox {
  id: string;
  isChecked?: boolean;
  checkboxHandler?: (id: string) => void;
}

function stopProp(e: React.MouseEvent) {
  e.stopPropagation();
}

export function TbodyCheckbox({
  isChecked,
  checkboxHandler,
  id,
}: IRowCheckbox): JSX.Element {
  function clickCheckbox() {
    checkboxHandler && checkboxHandler(id);
  }

  return (
    <td onClick={stopProp}>
      <div className={style["content-sales-table__wrapper"]}>
        <input
          placeholder="checkbox"
          checked={isChecked}
          type="checkbox"
          id={id}
          className={style["content-sales-table__checkbox"]}
          onChange={clickCheckbox}
        />
        <label
          className={style["content-sales-table__label"]}
          htmlFor={id}
        ></label>
      </div>
    </td>
  );
}
