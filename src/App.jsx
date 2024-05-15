import React from "react";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import QuestionUserPage from "./pages/QuestionUserPage.jsx";
import Feeds from "./pages/post/Feeds";
import HomePage from "./pages/homepage/HomePage.jsx";
import AnswerPage from "./pages/AnswerPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/list" element={<QuestionUserPage />} />
        <Route path="/post/:itemId" element={<Feeds />} />
        <Route path="/post/:itemId/answer" element={<AnswerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// api 코드 합치기
// 컴포넌트 안에서 api를 호출했을 때(fetch), 파악 후 옮기기
// import 경로 절대경로로 바꾸기
