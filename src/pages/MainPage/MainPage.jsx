import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiLoginBoxLine } from "react-icons/ri";

import * as S from "./styles";

export const MainPage = () => {
  return (
    <S.PageContainer>
      <S.PageTitle>What is your plan?</S.PageTitle>
      <S.SubTitle>💡 ➡ 📄</S.SubTitle>
      <S.IconWrap>
        <Link to={"/signin"}>
          <RiLoginBoxLine size={50} />
          <span>로그인</span>
        </Link>
        <Link to={"/signup"}>
          <AiOutlineUserAdd size={50} />
          <span>회원가입</span>
        </Link>
      </S.IconWrap>

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
