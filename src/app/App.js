import React from "react";
import { Provider } from "react-redux";
import Routes from "./Routes";
import store from "redux/store/store";

import "react-lazy-load-image-component/src/effects/blur.css";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
