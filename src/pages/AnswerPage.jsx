import React from "react";
import QuestionListUser from "../components/UI/QuestionListUser";
import GlobalStyle from "../styles/GlobalStyle";
import QuestionListItems from "../components/UI/QuestionListItems";
import Feeds from "./post/Feeds";
import TextAreaItem from "../components/UI/TextAreaItem";
import HeadProfile from "../components/UI/HeadProfile";

const AnswerPage = () => {
  return (
    <div>
      <HeadProfile />
      <QuestionListUser type={true} />
    </div>
  );
};

export default AnswerPage;
