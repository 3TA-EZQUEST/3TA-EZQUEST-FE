import React, { useState } from "react";
import { Layout, Space } from "antd";
import LeftSider from "../../Layouts/leftSider";
import BoxChat from "../../Layouts/BoxChat";
import Nav from "../../Layouts/navigatorBar";

const MainPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <React.Fragment>
      <Layout style={{ overflowY: "hidden", height: "100%", width: "100%" }}>
        <LeftSider collapsed={collapsed} setCollapsed={setCollapsed} />
        <Space direction="vertical">
          <Nav collapsed={collapsed} setCollapsed={setCollapsed} />
        </Space>
        <BoxChat style={{ overflow: "visible" }} />
      </Layout>
    </React.Fragment>
  );
};

export default MainPage;
