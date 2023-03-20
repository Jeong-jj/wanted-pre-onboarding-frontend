import React, { useEffect, useState } from "react";

import { getTodos } from "api/queries/todo";

import { TodoContent } from "components/Todos/TodoContent/TodoContent";

import * as S from "./styles";

export const TodoList = () => {
  const [todos, setTodo] = useState(null);

  useEffect(() => {
    const todoData = getTodos();
    todoData.then((res) => {
      setTodo(res.data);
    });
  }, []);

  return (
    <S.ListContainer>
      {todos !== null && todos.length > 0 ? (
        todos.map((data) => {
          return <TodoContent key={data.id} data={data} />;
        })
      ) : (
        <p>아직 계획된 일이 없어요!</p>
      )}
    </S.ListContainer>
  );
};
