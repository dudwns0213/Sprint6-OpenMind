import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import FaceBook from "./assets/icons/ic_facebook.svg?react"; // svgr 사용 예시
import DropdownMenu from "./components/UI/DropdownMenu.jsx";
import TextAreaItem from "./components/UI/TextAreaItem";
import UserCard from "./pages/components/UserCard";
import NoQuestion from "./components/UI/NoQuestion";
import Feeds from "./pages/post/Feeds.jsx";
import PostModal from "./pages/post/PostModal.jsx";
import QuestionListUser from "./components/UI/QuestionListUser.jsx";
import QuestionListPage from "./pages/QuestionListPage.jsx";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="list" element={<QuestionListPage />} />
        <Route path="post/:itemId/answer" element={<QuestionListUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
