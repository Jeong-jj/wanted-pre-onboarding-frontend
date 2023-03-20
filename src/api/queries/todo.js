import { apiWithToken } from "api";
import * as EP from "../endpoint";

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
export const completeTodo = (req) => {
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
export const updateTodo = (req) => {
  apiWithToken
    .put(EP.UPDATE_TODO(req[1]), req[0])
    .then((res) => {
      console.log(res);
      window.location.reload();
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
      window.location.reload();
      alert("목록이 삭제되었습니다.");
    })
    .catch((error) => {
      console.log(error);
    });
};
