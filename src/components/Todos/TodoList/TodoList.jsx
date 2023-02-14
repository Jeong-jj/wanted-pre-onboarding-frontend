import React from "react";

import data from "data/data.json";

import { EditDeleteButtons } from "../EditDeleteButtons/EditDeleteButtons";
import * as S from "./styles";

export const TodoList = () => {
  const todos = data.todos;

  return (
    <S.ListContainer>
      {todos.map((data) => {
        return (
          <S.ListWrap key={data.id}>
            <label>
              <input type="checkbox" checked={data.isCompleted} />
              <span>{data.todo}</span>
            </label>

            <EditDeleteButtons />
          </S.ListWrap>
        );
      })}
    </S.ListContainer>
  );
};
