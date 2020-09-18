import { combineReducers } from "redux";
// import all pages/components reducer
import homepageReducer from "../reducers/homepageReducer";

// combine all reducers into root reducer
const rootReducer = combineReducers({
  homepage: homepageReducer,
});

export default rootReducer;
