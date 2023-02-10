import React, { useEffect, useState } from "react";

import { useForm } from "../../hooks/useForm";
import { Input } from "../common/Input/Input";
import { validate } from "../../utils/validate";

import * as S from "./styles";

export const JoinForm = () => {
  const { values, handleChange } = useForm(initailValues);
  const [isChecked, setIsChecked] = useState(false);

  const errors = validate(values);

  useEffect(() => {
    if (!errors.email && !errors.password) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [errors, setIsChecked]);

  return (
    <S.FormWrap>
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

      <S.SubmitButton
        data-testid="signup-button"
        type="submit"
        disabled={!isChecked}
        className={`${isChecked ? "" : "disable"}`}
      >
        가입하기
      </S.SubmitButton>
    </S.FormWrap>
  );
};

const initailValues = {
  email: "",
  password: "",
};
