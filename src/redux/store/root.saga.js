import { all } from "redux-saga/effects";
// import all saga files
import homepageSaga from "../saga/hoeme.saga";

// combine all saga files
function* rootSaga() {
  yield all([homepageSaga()]);
}

export default rootSaga;
