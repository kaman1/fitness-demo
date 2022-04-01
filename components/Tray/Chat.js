import React from "react";

import { useChat } from "../../contexts/ChatProvider";
import { TrayButton } from "../../components/Tray";
import { useUIState } from "../../contexts/UIStateProvider";
import { ReactComponent as IconChat } from "../../icons/chat-md.svg";
import { CHAT_ASIDE } from "../Call/ChatAside";

export const ChatTray = () => {
  const { toggleAside } = useUIState();
  const { hasNewMessages } = useChat();

  return (
    <TrayButton
      label="Chat"
      bubble={hasNewMessages}
      z
      onClick={() => toggleAside(CHAT_ASIDE)}
    >
      <IconChat />
    </TrayButton>
  );
};

export default ChatTray;
