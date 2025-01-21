import React from "react";
import {
  EllipsisOutlined,
  ShareAltOutlined,
  EditOutlined,
  InboxOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Dropdown, Button, Tooltip } from "antd";

const OptionsSider = () => {
  const items = [
    {
      key: "1",
      label: "Share",
      icon: <ShareAltOutlined />,
    },
    {
      key: "2",
      label: "Change Name",
      icon: <EditOutlined />,
    },
    {
      key: "3",
      label: "Stored",
      icon: <InboxOutlined />,
    },
    {
      key: "4",
      label: "Delete",
      icon: <DeleteOutlined />,
      danger: true,
    },
  ];

  return (
    <Tooltip title="Optional">
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Button
          icon={<EllipsisOutlined style={{ fontSize: "20px" }} />}
          type="link"
          size="large"
          style={{ color: "black" }}
        />
      </Dropdown>
    </Tooltip>
  );
};

export default OptionsSider;
