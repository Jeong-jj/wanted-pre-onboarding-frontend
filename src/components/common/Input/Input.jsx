import React from "react";
import styled from "styled-components";

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
    <InputWrap>
      <InputBox
        type={type || "text"}
        name={name}
        value={value.name}
        onChange={onChange}
        placeholder={placeholder}
      />
      {join && errors[name] && <ErrorText>{errors[name]}</ErrorText>}
    </InputWrap>
  );
};

const InputWrap = styled.div`
  & + & {
    margin-top: 12px;
  }
`;

const InputBox = styled.input`
  width: 280px;
  padding: 8px 10px;
`;

const ErrorText = styled.p`
  padding: 6px 0 0 5px;
  font-size: 13px;
  color: #006eff;
`;