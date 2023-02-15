import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 50px 60px;
`;

export const Title = styled.h1`
  padding: 10px 0 25px;
  font-size: 22px;
`;

export const Todos = styled.div`
  display: flex;
  flex-direction: column;

  width: 75%;
`;

export const LogoutButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
`;
