import React from "react";
import { MobileOutlined, CloseOutlined } from "@ant-design/icons";
import { Flex, Button, Typography } from "antd";
import "./style.css";

const { Text } = Typography;

const bottomSider = () => {
  return (
    <React.Fragment>
      <div className="notification">
        <Flex
          justify="space-between"
          align="center"
          style={{ padding: "10px" }}
        >
          <MobileOutlined className="icon" />
          <Button icon={<CloseOutlined />} type="link"></Button>
        </Flex>
        <Text style={{ padding: "10px" }}>
          Download our app and receive extra 100 chats daily.
        </Text>
        <Flex gap="small">
          <Button type="link">Dismiss</Button>
          <Button type="link">Download App</Button>
        </Flex>
      </div>
    </React.Fragment>
  );
};

export default bottomSider;
