import React from "react";
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import GlobalStyle from "./styles/GlobalStyle";
import HomePage from "./pages/homepage/HomePage";


import FaceBook from "./assets/icons/ic_facebook.svg?react"; // svgr 사용 예시
import QuestionsListPage from "./pages/QuestionsListPage.jsx";
import AnswerPage from "./pages/AnswerPage.jsx";
import Feeds from "./pages/post/Feeds";
import AnswersPatchPage from "./pages/AnswersPatchPage.jsx";
import QuestionsCard from "./pages/QuestionsCard.jsx";

function App() {
  return (
    <>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/post/:id/answer" element={<AnswerPage/>}/>
        <Route path="/list" element={<QuestionsListPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
