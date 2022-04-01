import React, { useEffect } from "react";

import { RECORDING_MODAL } from "../RecordingModal";
import {
  RECORDING_ERROR,
  RECORDING_RECORDING,
  RECORDING_SAVED,
  RECORDING_UPLOADING,
  useRecording,
} from "../../contexts/RecordingProvider";
import { TrayButton } from "../../components/Tray";
import { useCallState } from "../../contexts/CallProvider";
import { useParticipants } from "../../contexts/ParticipantsProvider";
import { useUIState } from "../../contexts/UIStateProvider";
import { ReactComponent as IconRecord } from "../../icons/record-md.svg";

export const Tray = () => {
  const { enableRecording } = useCallState();
  const { openModal } = useUIState();
  const { recordingState } = useRecording();
  const { localParticipant } = useParticipants();

  useEffect(() => {
    console.log(`⏺️ Recording state: ${recordingState}`);

    if (recordingState === RECORDING_ERROR) {
      // show error modal here
    }
  }, [recordingState]);

  const isRecording = [
    RECORDING_RECORDING,
    RECORDING_UPLOADING,
    RECORDING_SAVED,
  ].includes(recordingState);

  if (!enableRecording) return null;
  if (!localParticipant.isOwner) return null;

  return (
    <TrayButton
      label={isRecording ? "Stop" : "Record"}
      orange={isRecording}
      onClick={() => openModal(RECORDING_MODAL)}
    >
      <IconRecord />
    </TrayButton>
  );
};

export default Tray;
