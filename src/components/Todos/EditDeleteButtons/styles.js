import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: 6px;

  button {
    display: flex;
    align-items: center;

    padding: 8px;

    border-radius: 6px;
    color: #fff;
  }
`;

export const EditButton = styled.button`
  margin-right: 7px;
  background-color: ${({ theme }) => theme.color.main2};
`;

export const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.color.warning};
`;
