import styled from "styled-components";

export const SubmitButton = styled.button`
  padding: 7px 5px;
  margin-top: 22px;

  border-radius: 6px;

  color: #fff;
  background-color: ${({ theme }) => theme.color.main1};

  &.disable {
    border: 1px solid ${({ theme }) => theme.disable.border};

    color: ${({ theme }) => theme.disable.font};
    background-color: ${({ theme }) => theme.disable.background};
    cursor: default;
  }
`;
