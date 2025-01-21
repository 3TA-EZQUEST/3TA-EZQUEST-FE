import React from "react";
import {
  PlusCircleOutlined,
  UpCircleFilled,
  PaperClipOutlined,
} from "@ant-design/icons";
import { Input, Flex, Button } from "antd";
import "./style.css";

const TypeBox = () => {
  return (
    <React.Fragment>
      <Flex gap="small">
        <Flex style={{ width: "100%" }}>
          <Button
            icon={<PlusCircleOutlined style={{ fontSize: "24px" }} />}
            type="link"
          />
          <Input placeholder="Type a message"></Input>
          <PaperClipOutlined style={{ fontSize: "24px" }} />
        </Flex>
        <Button
          icon={<UpCircleFilled style={{ fontSize: "24px" }} />}
          type="link"
        />
      </Flex>
    </React.Fragment>
  );
};

export default TypeBox;
