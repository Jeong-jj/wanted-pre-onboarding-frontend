import React from "react";

import { TodoForm } from "components/Todos/TodoForm/TodoForm";
import { TodoList } from "components/Todos/TodoList/TodoList";

import * as S from "./styles";

export const TodoPage = () => {
  return (
    <S.PageContainer>
      <S.Title>📝 할 일을 정리해보세요! 👀</S.Title>

      <S.Todos>
        <TodoForm />
        <TodoList />
      </S.Todos>
    </S.PageContainer>
  );
};
