import React, { useEffect, useState } from "react";

import { useForm } from "hooks/useForm";
import { validate } from "utils/validate";

import { join } from "api";

import { Input } from "components/common/Input/Input";
import { SubmitButton } from "components/common/SubmitButton/SubmitButton";
import * as S from "./styles";

export const JoinForm = () => {
  const { values, handleChange } = useForm(initailValues);
  const [isVerified, setIsVerified] = useState(false);

  const errors = validate(values);

  useEffect(() => {
    if (!errors.email && !errors.password) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  }, [errors, setIsVerified]);

  const handleJoin = (e) => {
    e.preventDefault();
    join(values);
  };

  return (
    <S.FormWrap onSubmit={handleJoin}>
      <Input
        data-testid="email-input"
        name="email"
        placeholder="todo@email.com"
        value={values}
        onChange={handleChange}
        errors={errors}
        join
      />
      <Input
        data-testid="password-input"
        name="password"
        type="password"
        placeholder="비밀번호는 8자 이상 입력해주세요."
        value={values}
        onChange={handleChange}
        errors={errors}
        join
      />

      <SubmitButton data-testid="signup-button" isEnabled={isVerified}>
        가입하기
      </SubmitButton>
    </S.FormWrap>
  );
};

const initailValues = {
  email: "",
  password: "",
};
