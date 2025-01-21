import React from "react";
import { Divider, Flex, Layout } from "antd";
import HeadSider from "../../Components/Sider/headSider/";
import BodySider from "../../Components/Sider/bodySider/";
import BottomSider from "../../Components/Sider/bottomSider/";

const { Sider } = Layout;

const LeftSider = ({ collapsed, setCollapsed }) => {
  return (
    <Sider
      theme="light"
      trigger="null"
      collapsed={collapsed}
      width={256}
      collapsedWidth={0}
      style={{
        backgroundColor: "#F8FAFC",
      }}
    >
      <Flex vertical>
        <HeadSider setCollapsed={setCollapsed} />
        <Flex vertical align="center">
          <Divider style={{ width: "70%", minWidth: "10%" }} />
          <BodySider collapsed={collapsed} />
          <Divider />
          <BottomSider />
        </Flex>
      </Flex>
    </Sider>
  );
};

export default LeftSider;
