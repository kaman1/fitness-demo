import React from "react";
import LiveStreamingModal from "../components/LiveStreamingModal";
import RecordingModal from "../components/RecordingModal";
import Head from "next/head";
import PropTypes from "prop-types";
import ChatAside from "../components/Call/ChatAside";
import Tray from "../components/Tray";
import GlobalStyle from "../components/GlobalStyle";
import { App as CustumApp } from "../components/App/App";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Daily - {process.env.PROJECT_TITLE}</title>
      </Head>
      <GlobalStyle />
      <Component
        asides={App.asides}
        modals={App.modals}
        customTrayComponent={App.customTrayComponent}
        customAppComponent={App.customAppComponent}
        {...pageProps}
      />
    </>
  );
}

App.defaultProps = {
  Component: null,
  pageProps: {},
};

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

App.asides = [ChatAside];
App.modals = [RecordingModal, LiveStreamingModal];
App.customTrayComponent = <Tray />;
App.customAppComponent = <CustumApp />;

export default App;
