import React from "react";
import styled from "styled-components";

export const Input = ({ type, name, value, onChange, placeholder }) => {
  return (
    <InputWrap>
      <InputBox
        type={type || "text"}
        name={name}
        value={value.name}
        onChange={onChange}
        placeholder={placeholder}
      />
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
