import React, { useEffect, useState } from "react";

import { getTodos } from "api";

import * as S from "./styles";
import { TodoContent } from "../TodoContent/TodoContent";

export const TodoList = () => {
  const [todos, setTodo] = useState(null);

  useEffect(() => {
    const todoData = getTodos();
    todoData.then((res) => {
      setTodo(res.data);
    });
  }, []);

  console.log("todos", todos);

  return (
    <S.ListContainer>
      {todos !== null && todos.length > 0 ? (
        todos.map((data) => {
          return <TodoContent data={data} />;
        })
      ) : (
        <p>아직 계획된 일이 없어요!</p>
      )}
    </S.ListContainer>
  );
};
