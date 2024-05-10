import styled from "styled-components";
import React, { useState, useEffect } from "react";
import QuestionIcon from "../../assets/icons/ic_messages.svg?react";
import QuestionListItems from "./QuestionListItems";
import getQuestions from "../../api/api.js";
import DeleteButton from "./DeleteButton.jsx";
import deleteQuestion from "../../api/deleteQuestions.js";

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
  font-size: 20px; //
  gap: 8px;

  @media (max-width: 576px) {
    //몇개의 질문이 있습니다 반응형
    font-size: 18px;
  }
`;
const StyledDiv = styled.div`
  padding: 16px; //여백 추가
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

  const handleDeleteAllQuestions = async () => {
    console.log("질문삭제");
    try {
      // 질문 데이터가 없으면 삭제를 수행하지 않음
      if (questionsData.results.length === 0) {
        console.log("삭제할 질문이 없습니다.");
        return;
      }
      // 모든 질문 삭제 요청을 동시에 보내고, 모든 요청이 완료될 때까지 기다림
      await Promise.all(
        questionsData.results.map(async (question) => {
          const data = await deleteQuestion(question.id);
          setQuestionsData(data);
          console.log(`질문 삭제: ${question.id}`);
        })
      );
    } catch (error) {
      console.error("질문 삭제 실패", error);
    }
  };

  return (
    <StyledDiv>
      {type ? <DeleteButton onDelete={handleDeleteAllQuestions} /> : null}
      <QuestionBox>
        <QuestionBrownText>
          <QuestionIcon />
          <span>{questionsData?.count || 0}개의 질문이 있습니다</span>
        </QuestionBrownText>
        {questionsData?.results?.map((question) => (
          <QuestionListItems
            question={question}
            key={`${question.id}`}
            type={type}
          />
        ))}
      </QuestionBox>
    </StyledDiv>
  );
}

export default QuestionListUser;
