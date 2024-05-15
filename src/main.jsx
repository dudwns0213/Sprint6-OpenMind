import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styles/GlobalStyle.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Styled-components에서는 createGlobalStyle 함수로 생성된 GlobalStyle 컴포넌트를 통해 전역적으로 CSS를 적용할 수 있어요 */}
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
