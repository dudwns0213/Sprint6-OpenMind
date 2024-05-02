import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import FaceBook from "./assets/icons/ic_facebook.svg?react"; // svgr 사용 예시
import DropdownMenu from "./components/UI/DopdownMenu";
import TextAreaItem from "./components/UI/TextAreaItem";
import UserCard from "./pages/components/UserCard";
import NoQuestion from "./components/UI/NoQuestion";

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>안녕 리액트!</h1>
      <FaceBook />
      <DropdownMenu />
      <TextAreaItem
        id="description"
        label="상품 소개"
        placeholder="상품 소개를 입력해 주세요"
      />
      <UserCard />
      <NoQuestion />
    </>
  );
}

export default App;
