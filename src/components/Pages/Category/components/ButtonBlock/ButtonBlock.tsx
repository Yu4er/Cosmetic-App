import React, { useCallback } from "react";

import style from "../../Category.module.scss";

interface IButtonBlockProps {
  text: string;
  placeholder: string;
  searchString?: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}

export function ButtonBlock({
  text,
  placeholder,
  searchString,
  setSearchString,
}: IButtonBlockProps) {
  const handleInput = useCallback(
    (event: React.SyntheticEvent<HTMLInputElement>) => {
      setSearchString((event.target as HTMLInputElement).value);
    },
    [setSearchString]
  );
  return (
    <div className={style["button-block"]}>
      <div className={style["button-block__input"]}>
        <input
          onChange={handleInput}
          type="text"
          className={"input"}
          placeholder={placeholder}
          value={searchString}
        ></input>
      </div>
      <div className={style["button-block__btn"]}>
        <button className="add-item__button" type="button">
          {text}
        </button>
      </div>
    </div>
  );
}
