import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import SearchSider from "../searchSider";
import NewChatSider from "../newChatSider";
import UserSider from "../userSider";

function HeadSider({ collapsed, setCollapsed }) {
  return (
    <React.Fragment>
      <Flex justify="space-between" align="center" style={{ padding: "10px" }}>
        <Tooltip title="Close SideBar">
          <Button
            type="text"
            size="large"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: "32px",
              height: "32px",
            }}
          />
        </Tooltip>
        <Flex gap="small">
          <SearchSider />
          <NewChatSider />
        </Flex>
      </Flex>
      <Flex justify="center">
        <UserSider />
      </Flex>
    </React.Fragment>
  );
}

export default HeadSider;
