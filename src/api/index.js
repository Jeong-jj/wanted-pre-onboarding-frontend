import axios from "axios";
import * as EP from "./endpoint";

const BASE_URL = "https://pre-onboarding-selection-task.shop/";
const HEADERS = { "Content-Type": "application/json" };

const instance = axios.create({ baseURL: BASE_URL, headers: HEADERS });

// User
export const join = (req) => {
  instance
    .post(EP.JOIN, req)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error.response.message;
    });
};

export const login = (req) => {
  instance.post(EP.LOGIN, req).then((res) => {
    console.log(res);
    return res;
  });
};
