import { api } from "api";
import * as EP from "../endpoint";

import { authToken } from "../../utils/authtoken";

export const join = (req) => {
  api
    .post(EP.JOIN, req)
    .then((res) => {
      console.log("result", res.status);
      alert("회원가입에 성공하였습니다!🎉");
    })
    .catch((error) => {
      alert(error.response.data.message);
      console.log(error.message);
    });
};

export const login = (req) => {
  api
    .post(EP.LOGIN, req)
    .then((res) => {
      console.log("result", res.status);
      authToken.setToken(res.data.access_token);
      window.location.reload();
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
