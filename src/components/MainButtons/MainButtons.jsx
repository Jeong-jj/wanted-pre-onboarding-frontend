import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineUserAdd } from "react-icons/ai";
import { RiLoginBoxLine } from "react-icons/ri";

import * as S from "./styles";

export const MainButtons = () => {
  return (
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
  );
};
