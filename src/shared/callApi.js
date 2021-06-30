import { call } from "redux-saga/effects";
import request from "./request";

// global function to call all types of api
const callApi = (url, data = null, type = "GET") => {
  let response;
  try {
    const formData = {
      method: type,
    };
    if (data) {
      formData.body = JSON.stringify(data);
    }
    const api = process.env.REACT_APP_BASEURL + url;
    response = call(request, api, formData);
  } catch (error) {
    return false;
  }
  return response;
};

export default callApi;
