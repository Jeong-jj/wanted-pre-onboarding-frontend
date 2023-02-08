import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Input } from "../Input/Input";
import * as S from "./styles";

export const JoinForm = () => {
  const { values, handleChange } = useForm(initailValues);
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    if (values.email && values.password) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [values, setIsChecked]);

  return (
    <S.FormWrap>
      <Input
        name="email"
        type="email"
        placeholder="todo@email.com"
        value={values}
        onChange={handleChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="비밀번호는 8자 이상 입력해주세요."
        value={values}
        onChange={handleChange}
      />

      <S.SubmitButton
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
