import React, { useContext } from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import { AuthContext } from "../../context/AuthContext";

const ChatsPage = () => {
  const { chatName } = useContext(AuthContext);

  const chatProps = useMultiChatLogic(
    "4eaf4547-4e7e-4a78-a1ed-864f456c913b",
    chatName,
    chatName
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatsPage;
