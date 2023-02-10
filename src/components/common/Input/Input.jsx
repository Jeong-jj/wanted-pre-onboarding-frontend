import React from "react";
import * as S from "./styles";

export const Input = ({
  join,
  type,
  name,
  value,
  onChange,
  placeholder,
  errors,
}) => {
  return (
    <S.InputWrap>
      <S.InputBox
        type={type || "text"}
        name={name}
        value={value.name}
        onChange={onChange}
        placeholder={placeholder}
      />
      {join && errors[name] && <S.ErrorText>{errors[name]}</S.ErrorText>}
    </S.InputWrap>
  );
};
