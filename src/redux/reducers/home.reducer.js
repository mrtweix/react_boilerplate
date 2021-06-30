import produce from "immer";
import * as constants from "../actions/home.actions";

export const initialState = {
  users: null,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const homepageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.LOAD_HOMEPAGE_DATA:
        break;
      case constants.SET_HOMEPAGE_DATA:
        draft.users = action.payload.data;
        break;
      case constants.BACKEND_HOMEPAGE_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default homepageReducer;
