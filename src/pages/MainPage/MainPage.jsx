import React from "react";

import { MainButtons } from "components/MainButtons/MainButtons";

import * as S from "./styles";

export const MainPage = () => {
  return (
    <S.PageContainer>
      <S.PageTitle>What is your plan?</S.PageTitle>
      <S.SubTitle>💡 ➡ 📄</S.SubTitle>

      <MainButtons />

      <S.ProjectLink>
        <a
          href="https://github.com/Jeong-jj/wanted-pre-onboarding-frontend"
          target="_blank"
          rel="noreferrer"
        >
          🔌 Github 보러가기
        </a>
        <a
          href="https://github.com/walking-sunset/selection-task"
          target="_blank"
          rel="noreferrer"
        >
          📝 요구사항 확인하기
        </a>
      </S.ProjectLink>
    </S.PageContainer>
  );
};
