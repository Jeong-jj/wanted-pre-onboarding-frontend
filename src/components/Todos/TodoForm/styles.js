import styled from "styled-components";

export const FormWrap = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.disable.border};

  button {
    margin: 0;
  }
`;

export const Input = styled.input`
  width: 200px;
  font-size: 15px;
  padding: 6px 8px;
  margin-right: 7px;
`;
