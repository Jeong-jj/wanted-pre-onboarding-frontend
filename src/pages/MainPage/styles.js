import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const PageTitle = styled.h1`
  margin-bottom: 15px;

  font-size: 35px;
  font-weight: bold;
`;

export const SubTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 40px;
`;

export const ProjectLink = styled.div`
  margin-top: 50px;
  text-align: center;
  a {
    display: block;
    margin-bottom: 10px;
  }
  a:hover {
    color: #0d8ad8;
    text-decoration: underline;
  }
`;
