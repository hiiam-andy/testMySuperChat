import React from "react";
import style from "./MyButton.module.css";

export default function MyButton(props) {
  return (
    <button className={style.myBtn} {...props}>
      {props.children}
    </button>
  );
}
