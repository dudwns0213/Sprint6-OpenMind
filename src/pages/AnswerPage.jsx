import React from "react";
import QuestionListUser from "../components/UI/QuestionListUser";
import GlobalStyle from "../styles/GlobalStyle";
import QuestionListItems from "../components/UI/QuestionListItems";
import Feeds from "./post/Feeds";
import TextAreaItem from "../components/UI/TextAreaItem";
import HeadProfile from "../components/UI/HeadProfile";
import DeleteButton from "../components/UI/DeleteButton";

const AnswerPage = () => {
  return (
    <div>
      <GlobalStyle />

      <HeadProfile />
      <DeleteButton />

      <QuestionListUser />
    </div>
  );
};

export default AnswerPage;
