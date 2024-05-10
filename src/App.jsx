import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import FaceBook from "./assets/icons/ic_facebook.svg?react"; // svgr 사용 예시
import QuestionsListPage from "./pages/QuestionsListPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AnswerPage from "./pages/AnswerPage.jsx";
import Feeds from "./pages/post/Feeds";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<AnswerPage />} />
          <Route path="/quetions" element={<QuestionsListPage />} />
          <Route path="/feeds" element={<Feeds />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
