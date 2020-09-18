import { all } from "redux-saga/effects";
// import all saga files
import homepageSaga from "../saga/homepageSaga";

// combine all saga files
export default function* () {
  yield all([homepageSaga()]);
}
