import React from "react";

import { deleteTodo } from "api/queries/todo";

import { RiDeleteBinLine } from "react-icons/ri";
import { VscEdit } from "react-icons/vsc";

import * as S from "./styles";

export const EditDeleteButtons = ({ todoId, setIsEditing }) => {
  const deleteThis = (e) => {
    e.preventDefault();
    deleteTodo(todoId);
  };

  const editThis = (e) => {
    e.preventDefault();
    setIsEditing((prev) => !prev);
  };

  return (
    <S.ButtonContainer>
      <S.EditButton
        type="button"
        data-testid="modify-button"
        onClick={editThis}
      >
        <VscEdit size={16} />
      </S.EditButton>
      <S.DeleteButton
        type="button"
        data-testid="delete-button"
        onClick={deleteThis}
      >
        <RiDeleteBinLine size={16} />
      </S.DeleteButton>
    </S.ButtonContainer>
  );
};
