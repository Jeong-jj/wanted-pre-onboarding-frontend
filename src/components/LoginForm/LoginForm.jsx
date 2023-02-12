import React, { useEffect, useState } from "react";
import { login } from "../../api";

import { useForm } from "../../hooks/useForm";
import { Input } from "../common/Input/Input";

import * as S from "./styles";

export const LoginForm = () => {
  const { values, handleChange } = useForm(initailValues);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (values.email && values.password) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [values, setIsChecked]);

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

      <S.SubmitButton
        data-testid="signin-button"
        type="submit"
        disabled={!isChecked}
        className={`${isChecked ? "" : "disable"}`}
      >
        로그인 하기
      </S.SubmitButton>
    </S.FormWrap>
  );
};

const initailValues = {
  email: "",
  password: "",
};
