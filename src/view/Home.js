import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "../component/ChatMessage";
import { auth, db } from "../component/firebase";
import firebase from "firebase";

const Home = () => {
  const [user] = useAuthState(auth);
  const scrollWindow = useRef();
  const [fieldValue, setFieldValue] = useState("");
  const messags = db.collection("messages");
  const query = messags.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messags.add({
      text: fieldValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFieldValue("");
    scrollWindow.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} messages={msg} />)}
        <span ref={scrollWindow}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
          placeholder="Enter Your Text"
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Home;
