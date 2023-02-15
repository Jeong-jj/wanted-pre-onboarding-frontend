import React, { useEffect, useState } from "react";

import { getTodos } from "api";

import { EditDeleteButtons } from "../EditDeleteButtons/EditDeleteButtons";
import * as S from "./styles";

export const TodoList = () => {
  const [todos, setTodo] = useState(null);

  useEffect(() => {
    const todoData = getTodos();
    todoData.then((res) => {
      setTodo(res.data);
    });
  }, []);

  console.log("todos", todos);

  const handleChecked = () => {};

  return (
    <S.ListContainer>
      {todos !== null && todos.length > 0 ? (
        todos.map((data, index) => {
          return (
            <S.ListWrap key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={data.isCompleted}
                  onChange={handleChecked}
                />
                <span>{data.todo}</span>
              </label>

              <EditDeleteButtons />
            </S.ListWrap>
          );
        })
      ) : (
        <p>아직 계획된 일이 없네요!</p>
      )}
    </S.ListContainer>
  );
};
