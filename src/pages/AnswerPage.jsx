import { useState, useEffect } from "react";
import QuestionListUser from "../components/UI/QuestionListUser";
import GlobalStyle from "../styles/GlobalStyle";
import QuestionListItems from "../components/UI/QuestionListItems";
import Feeds from "./post/Feeds";
import TextAreaItem from "../components/UI/TextAreaItem";
import HeadProfile from "../components/UI/HeadProfile";
import getQuestions from "../api/api";
import NoQuestion from "../components/UI/NoQuestion";

const AnswerPage = () => {
  const userId = window.localStorage.getItem("userId"); //로컬스토리지에 있는 id받아옴
  const [check, setCheck] = useState(false);

  const fetchQuestions = async () => {
    //질문이 없으면 NoQuestion, 있으면 보여줌
    const data = await getQuestions(userId, {});
    if (data.count === 0) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, [userId]);

  return (
    <div>
      <GlobalStyle />

      <HeadProfile subjectId={userId} />

      {check ? (
        <NoQuestion />
      ) : (
        <QuestionListUser
          type={true}
          subjectId={userId}
          handleCheck={setCheck}
        />
      )}
    </div>
  );
};

export default AnswerPage;
