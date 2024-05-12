import React from "react";
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import GlobalStyle from "./styles/GlobalStyle";
import HomePage from "./pages/HomePage.jsx";
import QuestionUserPage from './pages/QuestionUserPage.jsx';
import AnswerPage from "./pages/AnswerPage.jsx";
import Feeds from "./pages/post/Feeds";
import AnswersPatchPage from "./pages/AnswersPatchPage.jsx";
import QuestionsCard from "./pages/QuestionsCard.jsx";

function App() {
  return (
    <>
    <Router>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<AnswersPatchPage />} />
          <Route path="/list" element={<QuestionUserPage />} />
          <Route path="/post/:itemId/answer" element={<Feeds />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
