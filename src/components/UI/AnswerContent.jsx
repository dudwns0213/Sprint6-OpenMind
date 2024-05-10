import styled from "styled-components";
import { colors } from "../../styles/colors";
import TextAreaItem from "./TextAreaItem";
import { timeSince } from "../../util/TimeSince";
import { useEffect, useState } from "react";

const AnswerArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AnswerContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Since = styled.span`
  color: ${colors.GRAYSCALE_40};
  font-size: 0.85rem;
`;

const IsReject = styled.p`
  color: #b93333;
`;
const TitleIcon = styled.img`
  object-fit: cover;
  max-width: 136px;
  height: 136px;
  border-radius: 200px;
  background-color: skyblue;
  border: none;
`;
const QuestionTitleIcon = styled(TitleIcon)`
  width: 48px;
  height: 48px;
  @media (max-width: 576px) {
    //사용자 프로필 반응형
    width: 32px;
    height: 32px;
  }
`;
const QuestionUserNickNameArea = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 18px;
  @media (max-width: 576px) {
    //사용자 프로필 반응형
    font-size: 14px;
  }
`;

export default function AnswerContent({ question, subjectsData }) {
  return (
    <AnswerContainer>
      <QuestionTitleIcon src={subjectsData.imageSource} />
      <AnswerArea>
        <QuestionUserNickNameArea>
          <h3>{subjectsData.name}</h3>
          <Since>{timeSince(`${question.answer.createdAt}`)}</Since>
        </QuestionUserNickNameArea>
        {question.answer.isRejected ? (
          <IsReject>답변거절</IsReject>
        ) : (
          <p>{question.answer.content}</p>
        )}
      </AnswerArea>
    </AnswerContainer>
  );
}
