import React from "react";
import useChatStore from "../../../Context/chat";
import TypeBox from "../typeBox";

const Display = () => {
  const selectedChat = useChatStore((state) => state.selectedChat);
  if (!selectedChat) {
    return <div>Vui lòng chọn một cuộc trò chuyện để hiển thị</div>;
  }
  return (
    <React.Fragment>
      <h2>{selectedChat.label}</h2>
      <div>
        {selectedChat.messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <div style={{ display: "absolute", top: "0", right: "0" }}>
        <TypeBox />
      </div>
    </React.Fragment>
  );
};

export default Display;
