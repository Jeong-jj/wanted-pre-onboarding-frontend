import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  /* basic global setting */
  ${reset}

  /* project global setting */
  html, body, #root {
    background-color: #f1f1f1;
    height: 100%;
  }

  #root > .container {
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;

    background-color: #fff;
  }
`;

export default GlobalStyles;
