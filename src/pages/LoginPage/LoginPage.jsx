import React from "react";
import { LoginForm } from "../../components/Login/LoginForm";

import * as S from "./styles";

export const LoginPage = () => {
  return (
    <S.PageContainer>
      <S.PageTitle>로그인 정보를 입력해주세요!🙇‍♀️</S.PageTitle>
      <LoginForm />
    </S.PageContainer>
  );
};
