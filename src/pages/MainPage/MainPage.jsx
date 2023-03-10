import React from "react";

import { MainButtons } from "components/MainButtons/MainButtons";

import * as S from "./styles";

export const MainPage = () => {
  return (
    <S.PageContainer>
      <S.PageTitle>What is your plan?</S.PageTitle>
      <S.SubTitle>π‘ β‘ π</S.SubTitle>

      <MainButtons />

      <S.ProjectLink>
        <a
          href="https://github.com/Jeong-jj/wanted-pre-onboarding-frontend"
          target="_blank"
          rel="noreferrer"
        >
          π Github λ³΄λ¬κ°κΈ°
        </a>
        <a
          href="https://github.com/walking-sunset/selection-task"
          target="_blank"
          rel="noreferrer"
        >
          π μκ΅¬μ¬ν­ νμΈνκΈ°
        </a>
      </S.ProjectLink>
    </S.PageContainer>
  );
};
