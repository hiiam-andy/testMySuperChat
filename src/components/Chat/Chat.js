import React, { useState, useContext, useRef, useEffect } from "react";
import { Context } from "../../index";

import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import Loader from "../loader";

import { FiArrowUpCircle } from "react-icons/fi";

import style from "./Chat.module.css";

function Chat() {
  const ref = useRef(null);
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e) => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={style.chat_container}>
      <div className={style.chat_wrapper} id="chat">
        {messages.map((message) => (
          <div
            className={
              user.uid === message.uid ? style.chat_self : style.chat_other
            }
            key={message.uid + Math.random()}
          >
            <div className={style.chat_item}>
              <img
                className={style.chat_avatar}
                src={message.photoURL}
                alt="avatar"
              />
              <div>{message.displayName}</div>
            </div>
            <div className={style.chat_text}>{message.text}</div>
          </div>
        ))}
        <div ref={ref}></div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className={style.chat_input_section}
      >
        <input
          type="text"
          className={style.chat_input}
          placeholder="текст сообщения..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className={style.send_button}>
          {value.length > 0 ? (
            <FiArrowUpCircle onClick={sendMessage} />
          ) : (
            <FiArrowUpCircle />
          )}
        </span>
      </form>
    </div>
  );
}

export default Chat;
