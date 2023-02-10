import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

export const MainPage = () => {
  return (
    <S.PageContainer>
      <S.PageTitle>What is your plan?</S.PageTitle>
      <S.IconWrap>
        <Link to={"/signin"}>
          <button>로그인</button>
        </Link>
        <Link to={"/signup"}>
          <button>회원가입</button>
        </Link>
      </S.IconWrap>
    </S.PageContainer>
  );
};
