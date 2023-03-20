import React, { useEffect, useState } from "react";

import { login } from "api/queries/user";

import { useForm } from "../../hooks/useForm";
import { Input } from "../common/Input/Input";
import { SubmitButton } from "components/common/SubmitButton/SubmitButton";

import * as S from "./styles";

export const LoginForm = () => {
  const { values, handleChange } = useForm(initailValues);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    if (values.email && values.password) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [values, setIsFilled]);

  const handleLogin = (e) => {
    e.preventDefault();
    login(values);
  };

  return (
    <S.FormWrap onSubmit={handleLogin}>
      <Input
        data-testid="email-input"
        name="email"
        placeholder="todo@email.com"
        value={values}
        onChange={handleChange}
      />
      <Input
        data-testid="password-input"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={values}
        onChange={handleChange}
      />

      <SubmitButton data-testid="signin-button" isEnabled={isFilled}>
        로그인 하기
      </SubmitButton>
    </S.FormWrap>
  );
};

const initailValues = {
  email: "",
  password: "",
};
