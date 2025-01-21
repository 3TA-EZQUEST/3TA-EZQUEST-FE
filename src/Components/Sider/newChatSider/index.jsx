import React from "react";
import { FormOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import useChatStore from "../../../Context/chat";

const NewChatSider = () => {
  const addChat = useChatStore((state) => state.addChat);
  return (
    <React.Fragment>
      <Tooltip title="New Chat">
        <Button
          type="text"
          size="large"
          icon={<FormOutlined />}
          onClick={() => addChat("New Chat")}
        />
      </Tooltip>
    </React.Fragment>
  );
};

export default NewChatSider;
