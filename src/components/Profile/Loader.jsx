import React from "react";
import loadable from "shared/loadable";
import SkeletonLoader from "../SkeletonLoader";

export default loadable(() => import("./index"), {
  fallback: <SkeletonLoader />,
});
