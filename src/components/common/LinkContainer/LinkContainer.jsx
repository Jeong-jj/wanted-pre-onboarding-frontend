import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

export const LinkContainer = ({ join }) => {
  return (
    <>
      {join ? (
        <S.LinkWrap>
          이미 회원이신가요? <Link to={"/signin"}>로그인</Link>
        </S.LinkWrap>
      ) : (
        <S.LinkWrap>
          아직 회원이 아니신가요? <Link to={"/signup"}>회원가입</Link>
        </S.LinkWrap>
      )}
      <S.ToHome>
        <Link to={"/"}>🏠 홈으로 가기</Link>
      </S.ToHome>
    </>
  );
};
