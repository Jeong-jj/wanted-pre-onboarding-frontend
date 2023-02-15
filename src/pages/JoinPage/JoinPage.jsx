import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { authToken } from "utils/authtoken";

import { JoinForm } from "components/JoinForm/JoinForm";
import { LinkContainer } from "components/common/LinkContainer/LinkContainer";

import * as S from "./styles";

export const JoinPage = () => {
  const checkToken = authToken.getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (checkToken) {
      navigate("/signin");
    }
  }, [checkToken, navigate]);

  return (
    <S.PageContainer>
      <S.PageTitle>😌가입정보를 입력해주세요.</S.PageTitle>
      <JoinForm />
      <LinkContainer join />
    </S.PageContainer>
  );
};
