import styled from "styled-components";

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled.button`
  padding: 7px 5px;
  margin-top: 22px;

  border: none;
  border-radius: 6px;

  color: #fff;
  background-color: #009dff;
  cursor: pointer;

  &.disable {
    margin-top: 20px;

    border: 1px solid #a0a0a0;

    color: #898989;
    background-color: #eaeaea;
    cursor: default;
  }
`;
