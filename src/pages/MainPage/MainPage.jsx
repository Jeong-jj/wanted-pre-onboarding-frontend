import React from "react";

import * as S from "./styles";

export const MainPage = () => {
  return (
    <S.PageContainer>
      <S.PageTitle>What is your plan?</S.PageTitle>
      <S.IconWrap>
        <button>로그인</button>
        <button>회원가입</button>
      </S.IconWrap>
    </S.PageContainer>
  );
};
