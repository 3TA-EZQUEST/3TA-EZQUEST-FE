import React from "react";
import ListChatSider from "../listChatSider";
const BodySider = ({ collapsed }) => {
  return (
    <React.Fragment>
      <ListChatSider collapsed={collapsed} />
    </React.Fragment>
  );
};

export default BodySider;
