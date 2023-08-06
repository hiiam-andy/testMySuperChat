import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import "./App.css";
import { Context } from "./index";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./components/loader";

const App = () => {
  const { auth } = useContext(Context);
  const { loading } = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  return (
    <BrowserRouter>
      <div id="app_chat">
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
