import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../index";
import { LOGIN_ROUTE } from "../../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";

import MyButton from "../UI/MyButton/MyButton";

import style from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <div class={style.navbar_container}>
      <h2 className={style.logo}>SuperChat</h2>

      {user ? (
        <MyButton onClick={() => auth.signOut()} variant="contained">
          Выйти
        </MyButton>
      ) : (
        <MyButton variant="contained" onClick={() => navigate(LOGIN_ROUTE)}>
          Логин
        </MyButton>
      )}
    </div>
  );
}

export default Navbar;
