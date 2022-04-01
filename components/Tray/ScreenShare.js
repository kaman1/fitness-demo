import React, { useMemo } from "react";

import { TrayButton } from "../../components/Tray";
import { useCallState } from "../../contexts/CallProvider";
import { useParticipants } from "../../contexts/ParticipantsProvider";
import { ReactComponent as IconShare } from "../../icons/share-sm.svg";

const MAX_SCREEN_SHARES = 2;

export const ScreenShareTray = () => {
  const { callObject, enableScreenShare } = useCallState();
  const { screens, participants, localParticipant } = useParticipants();

  const isSharingScreen = useMemo(
    () => screens.some((s) => s.isLocal),
    [screens]
  );

  const screensLength = useMemo(() => screens.length, [screens]);

  const toggleScreenShare = () =>
    isSharingScreen
      ? callObject.stopScreenShare()
      : callObject.startScreenShare();

  const disabled =
    participants.length &&
    screensLength >= MAX_SCREEN_SHARES &&
    !isSharingScreen;

  if (!enableScreenShare) return null;
  if (!localParticipant.isOwner) return null;

  return (
    <TrayButton
      label={isSharingScreen ? "Stop" : "Share"}
      orange={isSharingScreen}
      disabled={disabled}
      onClick={toggleScreenShare}
    >
      <IconShare />
    </TrayButton>
  );
};

export default ScreenShareTray;
