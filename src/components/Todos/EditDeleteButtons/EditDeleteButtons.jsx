import React from "react";

import { RiDeleteBinLine } from "react-icons/ri";
import { VscEdit } from "react-icons/vsc";

import * as S from "./styles";

export const EditDeleteButtons = () => {
  return (
    <S.ButtonContainer>
      <S.EditButton type="button" data-testid="modify-button">
        <VscEdit size={16} />
      </S.EditButton>
      <S.DeleteButton type="button" data-testid="delete-button">
        <RiDeleteBinLine size={16} />
      </S.DeleteButton>
    </S.ButtonContainer>
  );
};
