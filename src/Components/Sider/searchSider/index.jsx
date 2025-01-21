import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

const SearchSider = () => {
  return (
    <React.Fragment>
      <Tooltip title="Search Chat">
        <Button type="text" size="large" icon={<SearchOutlined />} />
      </Tooltip>
    </React.Fragment>
  );
};

export default SearchSider;
