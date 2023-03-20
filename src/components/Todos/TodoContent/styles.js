import styled from "styled-components";

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
    width: 100%;
  }

  span {
    margin: 0 7px;
    word-break: break-all;
  }
`;
