import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color : transparent !important;
}

html,#root {
  width: calc(var(--vw, 1vw) * 100);
  height: calc(var(--vh, 1vh) * 100);
}

body {
  font-family: "NanumBarunGothic", "NanumGothic", "NanumBarunGothicBold", "NanumGothicBold", "NanumBarunGothicLight", "NanumGothicLight", "NanumBarunGothicUltraLight", "NanumGothicExtraBold";
  width: calc(var(--vw, 1vw) * 100);
  height: calc(var(--vh, 1vh) * 100);
  background-color: #0F103F;
  margin: 0 auto;
  padding: 0;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
}
`;
