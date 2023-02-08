import styled from "styled-components";

export const FormWrap = styled.form`
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled.button`
  padding: 7px 5px;
  margin-top: 40px;

  border: none;
  border-radius: 6px;

  color: #fff;
  background-color: #009dff;

  &.disable {
    border: 1px solid #a0a0a0;

    color: #898989;
    background-color: #eaeaea;
  }
`;
