import React from "react";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import QuestionUserPage from "./pages/QuestionUserPage.jsx";
import Feeds from "./pages/post/Feeds";
import HomePage from "./pages/homepage/HomePage.jsx";
import AnswerPage from "./pages/AnswerPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
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
