import React from "react";
import { Link } from "react-router-dom";
import { JoinForm } from "../../components/JoinForm/JoinForm";

import * as S from "./styles";

export const JoinPage = () => {
  return (
    <S.PageContainer>
      <S.PageTitle>😌가입정보를 입력해주세요.</S.PageTitle>
      <JoinForm />
      <p>
        이미 회원이신가요? <Link to={"/signin"}>로그인</Link>
      </p>
    </S.PageContainer>
  );
};
