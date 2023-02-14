import styled from "styled-components";

export const ListContainer = styled.ul`
  margin: 0 12px;
`;

export const ListWrap = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 8px;
  margin-bottom: 15px;
  border-bottom: 1px dotted ${({ theme }) => theme.disable.border};

  font-size: 16px;

  label {
    display: flex;
    align-items: center;
  }

  span {
    margin: 0 7px;
    word-break: break-all;
  }
`;
