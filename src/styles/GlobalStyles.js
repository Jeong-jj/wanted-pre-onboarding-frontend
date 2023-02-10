import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  /* basic global setting */
  ${reset}
  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
  button {
    border: none;
    background-color: transparent;
  }

  /* project global setting */
  html, body, #root {
    background-color: #f1f1f1;
    height: 100%;
  }

  #root {
    display:flex;
    justify-content:center;
    align-items: center;
  }
  #root > .container {
    height: 85%;
    max-height: 1000px;
    width: 90%;
    max-width: 1100px;

    background-color: #fff;
    border: 2px solid #878787;
    border-radius: 15px;
  }
`;

export default GlobalStyles;
