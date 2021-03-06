import React, { useEffect } from "react";
import { useParticipants } from "../../contexts/ParticipantsProvider";
import { useUIState, VIEW_MODE_SPEAKER } from "../../contexts/UIStateProvider";
import { GridView } from "../GridView";
import { SpeakerView } from "../SpeakerView";
import InviteOthers from "./InviteOthers";

const VideoView = () => {
  const { viewMode, setIsShowingScreenshare } = useUIState();
  const { participants, screens } = useParticipants();

  useEffect(() => {
    const hasScreens = screens.length > 0;
    setIsShowingScreenshare(hasScreens);
  }, [screens, setIsShowingScreenshare]);

  if (!participants.length) return null;
  if (participants.length === 1 && !screens.length > 0) return <InviteOthers />;

  return viewMode === VIEW_MODE_SPEAKER ? <SpeakerView /> : <GridView />;
};

export default VideoView;
