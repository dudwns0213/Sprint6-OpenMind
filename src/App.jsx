import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import FaceBook from "./assets/icons/ic_facebook.svg?react"; // svgr 사용 예시
import QuestionsListPage from "./pages/QuestionsListPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AnswerPage from "./pages/AnswerPage.jsx";
import Feeds from "./pages/post/Feeds";
import AnswersPatchPage from "./pages/AnswersPatchPage.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<AnswersPatchPage />} />
          <Route path="/quetions" element={<QuestionsListPage />} />
          <Route path="/feeds" element={<Feeds />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
