import styled from "styled-components";

export const IconWrap = styled.div`
  display: flex;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 70px;
    padding: 10px 8px;
    margin: 0 10px;

    border-radius: 8px;
    background-color: #35affc;
    color: #fff;

    span {
      font-weight: bold;
      padding-top: 5px;
    }
  }
`;
