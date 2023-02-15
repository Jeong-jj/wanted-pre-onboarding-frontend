import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import { authToken } from "utils/authtoken";

import { TodoForm } from "components/Todos/TodoForm/TodoForm";
import { TodoList } from "components/Todos/TodoList/TodoList";

import * as S from "./styles";

export const TodoPage = () => {
  const checkToken = authToken.getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkToken) {
      navigate("/signin");
    }
  }, [checkToken, navigate]);

  const logout = (e) => {
    e.preventDefault();
    authToken.setToken("");
    alert("로그아웃 되었습니다!");
    navigate("/signin");
  };

  return (
    <S.PageContainer>
      <S.Title>📝 할 일을 정리해보세요! 👀</S.Title>

      <S.Todos>
        <TodoForm />
        <TodoList />
      </S.Todos>

      <S.LogoutButton onClick={logout}>
        <FiLogOut size={26} />
      </S.LogoutButton>
    </S.PageContainer>
  );
};
