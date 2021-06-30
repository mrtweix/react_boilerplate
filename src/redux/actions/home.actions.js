/*
 *  define all homepage actions & constant types
 */

export const LOAD_HOMEPAGE_DATA = "LOAD_HOMEPAGE_DATA";
export const SET_HOMEPAGE_DATA = "SET_HOMEPAGE_DATA";
export const BACKEND_HOMEPAGE_ERROR = "BACKEND_HOMEPAGE_ERROR";

export const loadHomepageData = () => ({
  type: LOAD_HOMEPAGE_DATA,
});
export const setHomepageData = (payload) => ({
  payload,
  type: SET_HOMEPAGE_DATA,
});
export const backendHomepageError = (error) => ({
  payload: error,
  type: BACKEND_HOMEPAGE_ERROR,
});
