import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Login/LoginForm";

import * as S from "./styles";

export const LoginPage = () => {
  return (
    <S.PageContainer>
      <S.PageTitle>로그인 정보를 입력해주세요!🙇‍♀️</S.PageTitle>
      <LoginForm />
      <p>
        아직 회원이 아니신가요? <Link to={"/signup"}>회원가입</Link>
      </p>
    </S.PageContainer>
  );
};
