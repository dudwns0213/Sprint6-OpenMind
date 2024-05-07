import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import QuestionsListPage from "./pages/QuestionsListPage";
import Feeds from "./pages/post/Feeds";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<QuestionsListPage />} />
          <Route path="/feeds" element={<Feeds />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
