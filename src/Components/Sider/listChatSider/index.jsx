import React, { useState, useRef, useEffect } from "react";
import { Menu, Flex } from "antd";
import OptionsSider from "../optionSider";
import useChatStore from "../../../Context/chat";
import "./style.css";

const ListChatSider = ({ collapsed, onSelectChat }) => {
  const items = useChatStore((state) => state.chats);
  const selectedItems = useChatStore((state) => state.selectChat);
  const [hoveredKey, setHoveredKey] = useState(null);
  const [selectedKey, setSelectedKey] = useState(null);
  const [highlightTop, setHighlightTop] = useState(0);

  const menuContainerRef = useRef(null); // Ref cho container của menu

  useEffect(() => {
    if (selectedKey && menuContainerRef.current) {
      const menuItem = menuContainerRef.current.querySelector(
        `.menu-item.ant-menu-item-selected`
      ); // Tìm menu item đã chọn
      if (menuItem) {
        setHighlightTop(menuItem.offsetTop); // Cập nhật vị trí
      }
    }
  }, [selectedKey]);

  return (
    <div ref={menuContainerRef}>
      {/* Gắn ref trực tiếp vào container */}
      <Menu
        mode="inline"
        onClick={(e) => {
          setSelectedKey(e.key);
          onSelectChat?.(e.key);
          selectedItems(e.key);
        }}
        selectedKeys={[selectedKey]}
      >
        {items.map((item) => (
          <Menu.Item
            key={item.key}
            onMouseEnter={() => setHoveredKey(item.key)}
            onMouseLeave={() => setHoveredKey(null)}
            className={`menu-item ${
              hoveredKey === item.key || selectedKey === item.key
                ? "highlighted"
                : ""
            }`}
          >
            <Flex justify="space-between">
              {item.label}
              {(hoveredKey === item.key || selectedKey === item.key) && (
                <OptionsSider />
              )}
            </Flex>
          </Menu.Item>
        ))}
      </Menu>
      {selectedKey && (
        <div
          className="highlight-bar"
          style={{
            top: `${highlightTop}px`, // Vị trí dựa trên offsetTop
            display: collapsed ? "none" : "block",
          }}
        />
      )}
    </div>
  );
};

export default ListChatSider;
