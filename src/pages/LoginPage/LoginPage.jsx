import React from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { LinkContainer } from "../../components/common/LinkContainer/LinkContainer";

import * as S from "./styles";

export const LoginPage = () => {
  return (
    <S.PageContainer>
      <S.PageTitle>로그인 정보를 입력해주세요!🙇‍♀️</S.PageTitle>
      <LoginForm />
      <LinkContainer />
    </S.PageContainer>
  );
};
