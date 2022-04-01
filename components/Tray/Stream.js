import React from "react";

import { LIVE_STREAMING_MODAL } from "../../components/LiveStreamingModal";
import { useLiveStreaming } from "../../contexts/LiveStreamingProvider";
import { TrayButton } from "../../components/Tray";
import { useParticipants } from "../../contexts/ParticipantsProvider";
import { useUIState } from "../../contexts/UIStateProvider";
import { ReactComponent as IconStream } from "../../icons/streaming-md.svg";

export const Stream = () => {
  const { openModal } = useUIState();
  const { isStreaming } = useLiveStreaming();
  const { localParticipant } = useParticipants();

  if (!localParticipant.isOwner) return null;

  return (
    <TrayButton
      label={isStreaming ? "Live" : "Stream"}
      orange={isStreaming}
      onClick={() => openModal(LIVE_STREAMING_MODAL)}
    >
      <IconStream />
    </TrayButton>
  );
};

export default Stream;
