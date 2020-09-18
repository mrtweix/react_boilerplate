import { takeLatest, put } from "redux-saga/effects";
import * as actions from "../actions/homepageActions";
import * as constants from "../actions/homepageActions";
import * as api from "../../helpers/apiUrl";
import callApi from "../../helpers/callApi";

// funtion to fetch homepage Data
export function* loadHomepageDataSaga() {
  try {
    const response = yield callApi(api.usersURL);
    yield put(actions.setHomepageData(response));
  } catch (error) {
    yield put(actions.backendHomepageError("OOPS! Something went wrong."));
  }
}

// ***** BINDING ACTION & FUNCTION LOGIC ***** //
export default function* homepageSaga() {
  yield takeLatest(constants.LOAD_HOMEPAGE_DATA, loadHomepageDataSaga);
}
