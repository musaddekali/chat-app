import React from "react";
import "./home.css";
import MessageInput from "./MessageInput/MessageInput";
import Sidebar from "./Sidebar/Sidebar";
import Messages from "./Messages/Messages";
import { useGlobalContext } from "../../context/context";

const Home = () => {
  const {user} = useGlobalContext();

  if(!user) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div className="chat">
      <div className="chat-in">
        <Sidebar />
        <div className="chat-message-wrap">
          <Messages />
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default Home;
