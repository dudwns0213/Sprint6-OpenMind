import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import FaceBook from "./assets/icons/ic_facebook.svg?react"; // svgr 사용 예시
import QuestionsListPage from "./pages/QuestionsListPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="post/5819" element={<QuestionsListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
