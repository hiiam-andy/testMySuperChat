import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "./utils/firebaseConfig";

firebase.initializeApp(firebaseConfig);

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>
);
