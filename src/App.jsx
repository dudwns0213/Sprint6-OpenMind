import React from "react";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import QuestionListPage from "./pages/QuestionListPage/QuestionListPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import AnswerPage from "./pages/AnswerPage/AnswerPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/list" element={<QuestionListPage />} />
        <Route path="/post/:itemId" element={<FeedPage />} />
        <Route path="/post/:itemId/answer" element={<AnswerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// api 코드 합치기
// 컴포넌트 안에서 api를 호출했을 때(fetch), 파악 후 옮기기
// import 경로 절대경로로 바꾸기
