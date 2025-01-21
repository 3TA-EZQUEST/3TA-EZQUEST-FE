import { create } from "zustand";
import { chats } from "./chat";
const useMessageStore = create((set) => ({
  addMessage: (message) => {
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },
}));
