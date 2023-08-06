import React, { useContext } from "react";
import { Context } from "../../index";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import MyButton from "../UI/MyButton/MyButton";

import style from "./Login.module.css";

function Login() {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className={style.login_wrapper}>
      <div className={style.login_form}>
        <h1 className={style.login_welcome}>welcome to internet</h1>

        <MyButton onClick={login}>Войти c помощью Google</MyButton>
      </div>
    </div>
  );
}

export default Login;
