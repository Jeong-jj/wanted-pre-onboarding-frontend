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
