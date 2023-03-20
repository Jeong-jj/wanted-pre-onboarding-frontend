import React, { useState } from "react";

import { updateTodo } from "api/queries/todo";

import * as S from "./styles";

const EditFrom = ({ data, setIsEditing }) => {
  const [editValue, setEditValue] = useState(data.todo);

  const handleChange = (e) => {
    e.preventDefault();
    setEditValue(e.target.value);
  };

  const cancelEdit = (e) => {
    e.preventDefault();
    setIsEditing((prev) => !prev);
  };

  const editSubmit = () => {
    const editedValue = [
      {
        todo: editValue,
        isCompleted: data.isCompleted,
      },
      data.id,
    ];

    updateTodo(editedValue);
    setIsEditing((prev) => !prev);
  };

  return (
    <S.FormWrap onSubmit={editSubmit}>
      <S.EditInput
        placeholder="수정할 내용을 입력해주세요!"
        value={editValue}
        onChange={handleChange}
      />

      <S.ButtonWrap>
        <S.SubmitButton type="submit" onClick={editSubmit}>
          OK
        </S.SubmitButton>
        <S.EditButton type="button" onClick={cancelEdit}>
          X
        </S.EditButton>
      </S.ButtonWrap>
    </S.FormWrap>
  );
};

export default EditFrom;
