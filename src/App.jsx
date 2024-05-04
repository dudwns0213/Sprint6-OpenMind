import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import FaceBook from "./assets/icons/ic_facebook.svg?react"; // svgr 사용 예시
import DropdownMenu from "./components/UI/DopdownMenu";
import TextAreaItem from "./components/UI/TextAreaItem";
import UserCard from "./pages/components/UserCard";
import NoQuestion from "./components/UI/NoQuestion";
import Feeds from "./pages/post/Feeds.jsx";
import PostModal from "./pages/post/PostModal.jsx";
import QuestionListUser from "./components/UI/QuestionListUser.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnswerPage from "./pages/AnswerPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AnswerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
