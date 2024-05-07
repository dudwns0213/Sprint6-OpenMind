import styled from "styled-components";
import React, { useState, useEffect } from "react";
import QuestionIcon from "../../assets/icons/ic_messages.svg?react";
import QuestionListItems from "./QuestionListItems";
import getQuestions from "../../api/api.js";

const QuestionBox = styled.div`
  background-color: #f5f1ee;
  max-width: 684px;
  margin: 0 auto 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #c7bbb5;
  border-radius: 16px;
  padding: 16px;
`;
const QuestionBrownText = styled.div`
  color: #542f1a;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

function QuestionListUser({ type }) {
  const [questionsData, setQuestionsData] = useState([]);
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);

  const fetchQuestions = async ({ limit, offset }) => {
    const data = await getQuestions({ limit, offset });
    console.log(data);
    setQuestionsData(data);
  };
  useEffect(() => {
    fetchQuestions({ limit, offset });
  }, [limit, offset]);

  return (
    <QuestionBox>
      <QuestionBrownText>
        <QuestionIcon />
        <span>{questionsData.count}개의 질문이 있습니다</span>
      </QuestionBrownText>
      {questionsData.results?.map((question) => (
        <QuestionListItems
          question={question}
          key={`${question.id}`}
          type={type}
        />
      ))}
    </QuestionBox>
  );
}

export default QuestionListUser;
