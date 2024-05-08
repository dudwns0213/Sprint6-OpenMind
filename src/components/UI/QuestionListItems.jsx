import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Like from "../../assets/icons/ic_thumbs_up.svg?react";
import UnLike from "../../assets/icons/ic_thumbs_down.svg?react";
import TextAreaItem from "../UI/TextAreaItem";
import Kebab from "../../assets/icons/ic_more.svg?react";
import { colors } from "../../styles/colors";
import getUsers from "../../api/getUsers";
import { timeSince } from "../../util/TimeSince";
import KebabDropdown from "./KebabDropdown";

const TitleIcon = styled.img`
  object-fit: cover;
  max-width: 136px;
  height: 136px;
  border-radius: 200px;
  border: 1px solid black;
  background-color: skyblue;
  border: none;
`;
const QuestionArea = styled.div`
  border-radius: 16px;
  background-color: #fff;
  max-width: 684px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 32px;
  width: 100%;
`;
const QuestionClearButton = styled.div`
  color: #542f1a;
  background-color: #fff;
  font-size: 14px;
  font-weight: 500;
  display: flex; //텍스트 중앙정렬
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 26px;
  border-radius: 8px;
  border: 1px solid #542f1a;
`;
const QuestionTitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const QuestionTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;
const QuestionTextArea = styled.div`
  display: flex;
  gap: 12px;
`;
const QuestionTitleIcon = styled(TitleIcon)`
  width: 48px;
  height: 48px;
`;
const AnswerArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const QuestionUserNickNameArea = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const QuestionLikeArea = styled.div`
  display: flex;
  gap: 32px;
  border-top: 1px solid #cfcfcf;
  height: 43px;
  align-items: end;
`;
const LikeArea = styled.div`
  display: flex;
  align-items: center; //align 중앙정렬
  gap: 6px;
  color: #818181;
  cursor: pointer;
`;
const LikeIcon = styled.img`
  width: 14.12px;
  height: 14.33px;
`;
const UnLikeIcon = styled(LikeIcon)`
  text-align: end;
`;
const LikeText = styled.span`
  font-size: 14px;
`;
const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AnswerContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Since = styled.span`
  color: ${colors.GRAYSCALE_40};
  font-size: 0.85rem;
`;
const KebabContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

function QuestionListItems({ type, question }) {
  //props 내려서 type에 따라 보이는 컴포넌트 변경(kebab, textarea)
  const [subjectsData, setSubjectsData] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const fetchSubjects = async () => {
    const users = await getUsers();
    console.log(users);
    setSubjectsData(users);
  };
  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <QuestionArea>
      <QuestionHeader>
        <QuestionClearButton>
          {question.answer ? "답변완료" : "미답변"}
        </QuestionClearButton>
        {type ? (
          <KebabContainer>
            <Kebab onClick={toggleDropdown} />
            {isDropdownVisible ? <KebabDropdown /> : null}
          </KebabContainer>
        ) : null}
      </QuestionHeader>
      <QuestionTitleArea>
        <Since>질문 · {timeSince(`${question.createdAt}`)}</Since>
        <QuestionTitle>{question.content}</QuestionTitle>
      </QuestionTitleArea>
      <QuestionTextArea>
        {type ? (
          <TextAreaItem />
        ) : (
          question.answer && (
            <AnswerContainer>
              <QuestionTitleIcon src={subjectsData.imageSource} />
              <AnswerArea>
                <QuestionUserNickNameArea>
                  <h3>{subjectsData.name}</h3>
                  <Since>{timeSince(`${question.answer.createdAt}`)}</Since>
                </QuestionUserNickNameArea>
                <p>{question.answer.content}</p>
                <p>{question.answer.isRejected ? "답변거절" : null}</p>
              </AnswerArea>
            </AnswerContainer>
          )
        )}
      </QuestionTextArea>
      <QuestionLikeArea>
        <LikeArea>
          <Like />
          <LikeText>좋아요 {question.like}</LikeText>
        </LikeArea>
        <LikeArea>
          <UnLike />
          <LikeText>싫어요 {question.dislike}</LikeText>
        </LikeArea>
      </QuestionLikeArea>
    </QuestionArea>
  );
}

export default QuestionListItems;
