import React, { useState } from "react";

import { updateTodo } from "api";

import { EditDeleteButtons } from "../EditDeleteButtons/EditDeleteButtons";
import * as S from "./styles";

export const TodoContent = ({ data }) => {
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);

  const handleChecked = () => {
    const checkedValue = [
      {
        todo: data.todo,
        isCompleted: !isCompleted,
      },
      data.id,
    ];

    updateTodo(checkedValue);
    setIsCompleted((prev) => !prev);
  };

  return (
    <S.ListWrap>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={handleChecked} />
        <span>{data.todo}</span>
      </label>

      <EditDeleteButtons todoId={data.id} />
    </S.ListWrap>
  );
};
