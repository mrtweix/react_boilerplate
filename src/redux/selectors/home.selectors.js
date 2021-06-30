import { createSelector } from "reselect";
import { initialState } from "../reducers/home.reducer";

const selectHomepageDomain = (state) => state.homepage || initialState;

const makeSelectHomepage = () =>
  createSelector(selectHomepageDomain, (substate) => substate);

const makeSelectHomepageUser = () =>
  createSelector(selectHomepageDomain, (substate) => substate?.users);

const makeSelectHomepageError = () =>
  createSelector(selectHomepageDomain, (substate) => substate?.error);

export default makeSelectHomepage;
export {
  selectHomepageDomain,
  makeSelectHomepageUser,
  makeSelectHomepageError,
};
