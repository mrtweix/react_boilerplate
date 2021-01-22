import { createSelector } from "reselect";
import { initialState } from "../reducers/homepageReducer";

const selectHomepageDomain = (state) => state.homeage || initialState;

const makeSelectHomepage = () =>
  createSelector(selectHomepageDomain, (substate) => substate);

export default makeSelectHomepage;
export { selectHomepageDomain };
