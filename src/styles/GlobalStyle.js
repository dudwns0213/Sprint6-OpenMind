import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Pretendard"
}

button,
input,
textarea,
select {
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

button {
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
}

img,
svg {
  vertical-align: bottom;
}

body {
  word-break: keep-all;
  font-family: "Pretendard", sans-serif;
}
`;

export default GlobalStyle;
