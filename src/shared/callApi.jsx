import { call } from "redux-saga/effects";
import request from "./request";
import baseURL from "./baseUrl";

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
    const api = baseURL + url;
    response = call(request, api, formData);
  } catch (error) {
    return false;
  }
  return response;
};

export default callApi;
