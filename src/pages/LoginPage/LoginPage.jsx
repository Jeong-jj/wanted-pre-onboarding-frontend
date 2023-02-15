import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { authToken } from "utils/authtoken";

import { LoginForm } from "components/LoginForm/LoginForm";
import { LinkContainer } from "components/common/LinkContainer/LinkContainer";

import * as S from "./styles";

export const LoginPage = () => {
  const checkToken = authToken.getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (checkToken) {
      navigate("/todo");
    }
  }, [checkToken, navigate]);

  return (
    <S.PageContainer>
      <S.PageTitle>로그인 정보를 입력해주세요!🙇‍♀️</S.PageTitle>
      <LoginForm />
      <LinkContainer />
    </S.PageContainer>
  );
};
