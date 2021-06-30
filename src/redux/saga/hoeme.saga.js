import { takeLatest, put } from "redux-saga/effects";
import callApi from "shared/callApi";
import * as api from "shared/api";
import * as actions from "../actions/home.actions";
import * as constants from "../actions/home.actions";

// ***** LOAD HOMEPAGE DATA ***** //
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
