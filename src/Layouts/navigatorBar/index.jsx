import React from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  SunOutlined,
  MoonOutlined,
  ClockCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Dropdown, Tooltip, Button, Flex, Layout } from "antd";

const { Header } = Layout;

const Nav = ({ collapsed, setCollapsed }) => {
  const items = [
    {
      key: "1",
      label: "GPT-4O",
    },
  ];
  return (
    <Header
      style={{
        width: "100vw",
        backgroundColor: "#FFFFFF",
        position: "fixed",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <Flex align="center" justify="space-between">
        <Flex>
          <Tooltip title="Open Sidebar">
            <Button
              type="text"
              size="large"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                display: collapsed ? "block" : "none",
              }}
            />
          </Tooltip>
          <Dropdown trigger={["click"]} menu={{ items }}>
            <Button type="link" size="large">
              MODELS
              <DownOutlined />
            </Button>
          </Dropdown>
        </Flex>
        <Flex gap="large">
          <Button icon={<SunOutlined />} type="link" />
          <Button icon={<MoonOutlined />} type="link" />
        </Flex>
        <Flex align="center" gap="small">
          <div>
            <ClockCircleOutlined />
            <label> ?? hours ago</label>
          </div>
          <Button icon={<SettingOutlined />} />
        </Flex>
      </Flex>
    </Header>
  );
};

export default Nav;
