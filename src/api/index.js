import axios from "axios";
import { authToken } from "../utils/authtoken";
import { interceptors } from "./interceptor";
import * as EP from "./endpoint";

const BASE_URL = "https://pre-onboarding-selection-task.shop/";
const HEADERS = { "Content-Type": "application/json" };

const api = axios.create({ baseURL: BASE_URL, headers: HEADERS });

const apiWithToken = interceptors(api);

// User
export const join = (req) => {
  api
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
  api
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

// Todos
export const getTodos = async () => {
  try {
    const res = await apiWithToken.get(EP.GET_TODO);
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const createTodo = (req) => {
  apiWithToken
    .post(EP.ADD_TODO, req)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const updateTodo = (req) => {
  apiWithToken
    .put(EP.UPDATE_TODO(req[1]), req[0])
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
      alert("Error: 수정사항이 반영되지 않았습니다.");
    });
};
export const deleteTodo = (todoId) => {
  apiWithToken
    .delete(EP.DELETE_TODO(todoId))
    .then((res) => {
      console.log(res);
      window.location.href = "/todo";
    })
    .catch((error) => {
      console.log(error);
    });
};
