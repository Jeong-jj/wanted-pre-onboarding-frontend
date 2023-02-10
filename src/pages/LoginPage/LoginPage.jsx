import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Login/LoginForm";

import * as S from "./styles";

export const LoginPage = () => {
  return (
    <S.PageContainer>
      <S.PageTitle>로그인 정보를 입력해주세요!🙇‍♀️</S.PageTitle>
      <LoginForm />
      <S.LinkWrap>
        아직 회원이 아니신가요? <Link to={"/signup"}>회원가입</Link>
      </S.LinkWrap>
      <S.LinkWrap>
        <Link to={"/"}>홈으로 가기</Link>
      </S.LinkWrap>
    </S.PageContainer>
  );
};
