import React from "react";
import { JoinForm } from "../../components/JoinForm/JoinForm";

import * as S from "./styles";

export const JoinPage = () => {
  return (
    <S.PageContainer>
      <S.PageTitle>😌가입정보를 입력해주세요.</S.PageTitle>
      <JoinForm />
    </S.PageContainer>
  );
};
