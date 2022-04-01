import React from "react";
import { useRouter } from "next/router";

import NotConfigured from "../components/Prejoin/NotConfigured";
import { CallProvider } from "../contexts/CallProvider";
import { MediaDeviceProvider } from "../contexts/MediaDeviceProvider";
import { ParticipantsProvider } from "../contexts/ParticipantsProvider";
import { TracksProvider } from "../contexts/TracksProvider";
import { UIStateProvider } from "../contexts/UIStateProvider";
import { WaitingRoomProvider } from "../contexts/WaitingRoomProvider";
import getDemoProps from "../lib/demoProps";
import App from "../components/App";

const Room = ({
  domain,
  isConfigured = false,
  subscribeToTracksAutomatically = true,
  asides,
  modals,
  customTrayComponent,
  customAppComponent,
}) => {
  const router = useRouter();
  const { room, t } = router.query;

  if (!isConfigured) return <NotConfigured />;
  return (
    <UIStateProvider
      asides={asides}
      modals={modals}
      customTrayComponent={customTrayComponent}
    >
      <CallProvider
        domain={domain}
        room={room}
        token={t}
        subscribeToTracksAutomatically={subscribeToTracksAutomatically}
        cleanURLOnJoin
      >
        <ParticipantsProvider>
          <TracksProvider>
            <MediaDeviceProvider>
              <WaitingRoomProvider>
                {customAppComponent || <App />}
              </WaitingRoomProvider>
            </MediaDeviceProvider>
          </TracksProvider>
        </ParticipantsProvider>
      </CallProvider>
    </UIStateProvider>
  );
};

export default Room;

export async function getStaticProps() {
  const defaultProps = getDemoProps();
  return {
    props: defaultProps,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
