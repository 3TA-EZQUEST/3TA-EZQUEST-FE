import React from "react";
import {
  DownOutlined,
  UserOutlined,
  SettingOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown } from "antd";
import "./style.css";

const items = [
  {
    label: "Settings",
    icon: <SettingOutlined />,
  },
  {
    label: "Buy Token",
    icon: <ShoppingOutlined />,
  },
];

const UserSider = () => {
  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      overlayClassName="custom-dropdown"
    >
      <Button
        type="text"
        size="large"
        style={{ width: "220px", height: "60px" }}
      >
        <Avatar icon={<UserOutlined />} size="large" />
        <div>
          <label style={{ fontWeight: "bold" }}>User Name</label>
          <br />
          <label>... Token Left</label>
        </div>
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default UserSider;
