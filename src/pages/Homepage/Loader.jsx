import React from "react";
import loadable from "shared/loadable";
import RoundLoader from "components/RoundLoader";

export default loadable(() => import("./Homepage"), {
  fallback: <RoundLoader />,
});
