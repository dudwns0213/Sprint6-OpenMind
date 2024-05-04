import styled from "styled-components";
import React from "react";
import QuestIcon from "../../assets/icons/ic_messages.svg?react";
import QuestionListItems from "./QuestionListItems";
/* svrg 사용 */

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
const QuestionIcon = styled.img`
  color: #542f1a;
`;

function QuestionListUser() {
  return (
    <QuestionBox>
      <QuestionBrownText>
        <QuestionIcon src={QuestIcon} alt={QuestIcon} />
        <span>3개의 질문이 있습니다</span>
      </QuestionBrownText>
      <QuestionListItems />
    </QuestionBox>
  );
}

export default QuestionListUser;
