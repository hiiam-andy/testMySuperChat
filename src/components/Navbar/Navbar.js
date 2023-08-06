import React, { useContext } from "react";
import { Context } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";

import MyButton from "../UI/MyButton/MyButton";

import style from "./Navbar.module.css";

function Navbar() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <div class={style.navbar_container}>
      <h2 className={style.logo}>SuperChat</h2>
      {user && <MyButton onClick={() => auth.signOut()}>Выйти</MyButton>}
    </div>
  );
}

export default Navbar;
