import axios from "axios";
import { authToken } from "../utils/authtokken";
import * as EP from "./endpoint";

const BASE_URL = "https://pre-onboarding-selection-task.shop/";
const HEADERS = { "Content-Type": "application/json" };

const instance = axios.create({ baseURL: BASE_URL, headers: HEADERS });

// User
export const join = (req) => {
  instance
    .post(EP.JOIN, req)
    .then((res) => {
      console.log("result", res.status);
      alert("회원가입에 성공하였습니다!🎉");
      window.location.href = "/signin";
    })
    .catch((error) => {
      alert(error.response.data.message);
      console.log(error.message);
    });
};

export const login = (req) => {
  instance
    .post(EP.LOGIN, req)
    .then((res) => {
      console.log("result", res.status);
      authToken.setToken(res.data.access_token);
      window.location.href = "/todo";
    })
    .catch((error) => {
      console.log(error.message);
      if (error.response.status === 404) {
        alert(error.response.data.message);
      } else if (error.response.status === 401) {
        alert("비밀번호를 다시 확인해주세요.");
      }
    });
};
