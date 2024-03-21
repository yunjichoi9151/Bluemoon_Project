import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #FFFFFF;
    --grey: #7a7a7a;
    --purpleBlue: linear-gradient(107.21deg, #C961DE 24.43%, #2954A3 68.95%);
    --font-paragraph-small: 0.75rem/1.6;
    --font-paragraph-medium: 1rem/1.6;
    --font-paragraph-large: 1.5rem/1.6;
    --font-paragraph-xl: 2rem/1.6;

    --font-label-xs: bold 0.5rem/1.5;
    --font-label-small: bold 0.75rem/1.5;
    --font-label-medium: bold 1rem/1.5;
    --font-label-large: bold 1.5rem/1.5;
    --font-label-xl: bold 2rem/1.5;
    --font-label-xxl: bold 2.5rem/1.5;

    --font-heading-medium: bold 1rem/1.4;
    --font-heading-large: bold 1.5rem/1.4;
    --font-heading-xl: bold 2rem/1.4;
    --font-heading-xxl: bold 2.5rem/1.4;
    --font-heading-xxxl: bold 3rem/1.4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color : transparent !important;
  }

  html {
    font-size: 100%;
  }

  body {
    font-family: "SUITE-Regular", "Raleway", "Gowun Dodum";
    overflow-x: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(to bottom, #04070e, #13182f, #011C41, #022E55, #154F75, #365C81, #8E98A2, #a89b85);
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  a {
    text-decoration: none;
  }

  button, .button {
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }

  @font-face {
    font-family: 'SUITE-Regular', sans-serif;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
`;
