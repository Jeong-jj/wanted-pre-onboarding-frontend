import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const PageTitle = styled.h1`
  margin-bottom: 30px;

  font-size: 22px;
  font-weight: bold;
`;

export const LinkWrap = styled.div`
  margin-top: 15px;
  font-size: 13px;
  a {
    text-decoration: underline;
  }
`;

export const HomeLink = styled.div`
  margin-top: 18px;
  font-size: 15px;
  font-weight: bold;
`;
