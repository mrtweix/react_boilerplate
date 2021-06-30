import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Routes from "./routes/Routes";
import store from "redux/store/store";
import useConnectivity from "hooks/useConnectivity";
import notify from "shared/notify";

import "assets/css/global.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const App = () => {
  const [onlineStatus] = useConnectivity();

  useEffect(() => {
    notify(
      onlineStatus ? "You are Online" : "You are Offline",
      onlineStatus ? "info" : "warning"
    );
  }, [onlineStatus]);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
