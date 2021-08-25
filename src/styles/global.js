import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Open Sans', sans-serif;
  }
  :root{
    --white: #FFF;
    --white-10: #0000000D;
    --white-20: #F2F2F2;
    --black: #000;
    --red: #ED1B24;
    --gray-900: #222222;
    --gray-600: #000000D5;
    --gray-400: #000000C4;
    --gray-200: #9B9B9B;
    --gray-100: #00000029;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
`;
