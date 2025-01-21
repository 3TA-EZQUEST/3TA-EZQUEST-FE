import React from "react";
import { Layout } from "antd";
import Display from "../../Components/BoxChat/display";

const { Content } = Layout;

const BoxChat = () => {
  return (
    <Content
      style={{
        backgroundColor: "white",
        height: "100vh",
        margin: "0 15% 0 15%",
        paddingTop: "40px",
        borderRight: "1px solid #E2E8F0",
        borderLeft: "1px solid #E2E8F0",
        overflow: "auto",
      }}
    >
      <div style={{ padding: "20px" }}>
        <Display />
      </div>
    </Content>
  );
};

export default BoxChat;
