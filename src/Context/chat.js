import { create } from "zustand";

const useChatStore = create((set) => ({
  chats: [
    {
      key: "chat-0",
      label: "Tutorial",
      messages: ["Hello! This is a tutorial."],
    },
    { key: "chat-1", label: "Example 1", messages: ["This is example chat."] },
  ],
  selectedChat: null,
  addChat: (label) =>
    set((state) => ({
      chats: [...state.chats, { key: `chat-${state.chats.length}`, label }],
    })), // Thêm chat mới
  removeChat: (key) =>
    set((state) => ({
      chats: state.chats.filter((item) => item.key !== key),
    })), // Xóa chat theo key
  renameChat: (key, label) =>
    set((state) => ({
      chats: state.chats.map((item) =>
        item.key === key ? { ...item, label } : item
      ),
    })), // Đổi tên chat theo key
  selectChat: (key) =>
    set((state) => ({
      selectedChat: state.chats.find((item) => item.key === key),
    })), // Chọn chat theo key
}));

export default useChatStore;
