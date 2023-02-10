import styled from "styled-components";

export const InputWrap = styled.div`
  & + & {
    margin-top: 12px;
  }
`;

export const InputBox = styled.input`
  width: 280px;
  padding: 8px 10px;
`;

export const ErrorText = styled.p`
  padding: 6px 0 0 5px;
  font-size: 13px;
  color: #006eff;
`;
