import React, { useState } from "react";

import { completeTodo } from "api/queries/todo";

import EditFrom from "components/EditForm/EditFrom";
import { EditDeleteButtons } from "components/Todos/EditDeleteButtons/EditDeleteButtons";

import * as S from "./styles";

export const TodoContent = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);

  const handleChecked = () => {
    const checkedValue = [
      {
        todo: data.todo,
        isCompleted: !isCompleted,
      },
      data.id,
    ];

    completeTodo(checkedValue);
    setIsCompleted((prev) => !prev);
  };

  return (
    <S.ListWrap>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={handleChecked} />

        {!isEditing ? (
          <span>{data.todo}</span>
        ) : (
          <EditFrom data={data} setIsEditing={setIsEditing} />
        )}
      </label>

      {!isEditing && (
        <EditDeleteButtons todoId={data.id} setIsEditing={setIsEditing} />
      )}
    </S.ListWrap>
  );
};
