import styled from "styled-components";

export const FormWrap = styled.form`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-left: 10px;
`;

export const EditInput = styled.input`
  width: 70%;
  padding: 6px 10px;
`;

export const ButtonWrap = styled.div`
  button {
    padding: 6px;
    width: 32px;
    height: 32px;

    border-radius: 6px;
    color: #fff;
  }
`;

export const SubmitButton = styled.button`
  margin-right: 7px;
  background-color: #31d304;
`;

export const EditButton = styled.button`
  background-color: #858585;
`;
