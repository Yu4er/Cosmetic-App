import React from "react";

import { TableContainer } from "./components/TableContainer/TableContainer";
import style from "./Brands.module.scss";
import { FileFieldInput } from "./components/FileFieldInput/FileFieldInput";

export function Brands() {
  return (
    <div className={style["brands-page"]}>
      <FileFieldInput />
      <div className={style["table-block"]}>
        <TableContainer />
      </div>
    </div>
  );
}
