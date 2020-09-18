import produce from "immer";
import * as constants from "../actions/homepageActions";

const initialState = {
  pageData: null,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const homepageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.LOAD_HOMEPAGE_DATA:
        break;
      case constants.SET_HOMEPAGE_DATA:
        draft.pageData = action.payload;
        break;
      case constants.BACKEND_HOMEPAGE_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default homepageReducer;
