import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Like from "@assets/icons/ic_thumbs_up.svg?react";
import LikeFocus from "@assets/icons/ic_thumbs_up_focus.svg?react";
import UnLike from "@assets/icons/ic_thumbs_down.svg?react";
import UnLikeFocus from "@assets/icons/ic_thumbs_down_focus.svg?react";
import Kebab from "@assets/icons/ic_more.svg?react";
import { colors } from "@/styles/colors";
import { timeSince } from "../../../util/TimeSince";
import KebabDropdown from "@/pages/AnswerPage/components/KebabDropdown";
import RenderBy from "./RenderBy";
import AnswerPatchTextArea from "@/pages/AnswerPage/components/AnswerPatchTextArea";
import {
  getUsers,
  deleteAnswers,
  postReaction,
} from "../../../api/OpenMindApi";

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
  @media (max-width: 576px) {
    //질문 내용 반응형
    font-size: 16px;
  }
`;
const QuestionTextArea = styled.div`
  display: flex;
  gap: 12px;
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

const LikeText = styled.span`
  font-size: 14px;
  color: ${(props) => props.color || colors.GRAYSCALE_40};
`;
const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Since = styled.span`
  color: ${colors.GRAYSCALE_40};
  font-size: 0.85rem;
`;
const KebabContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

function QuestionListItems({ type, question, subjectId }) {
  //props 내려서 type에 따라 보이는 컴포넌트 변경(kebab, textarea)
  const [subjectsData, setSubjectsData] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [likeColor, setLikeColor] = useState(`${colors.GRAYSCALE_40}`);
  const [dislikeColor, setDislikeColor] = useState(`${colors.GRAYSCALE_40}`);
  const [likeCount, setLikeCount] = useState(question.like);
  const [dislikeCount, setDislikeCount] = useState(question.dislike);
  const [likeChanged, setLikeChanged] = useState(false);
  const [disLikeChanged, setDislikeChanged] = useState(false);
  const [answer, setAnswer] = useState(question.answer);
  const [isEditing, setIsEditing] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const fetchSubjects = async () => {
    const users = await getUsers(subjectId, {});
    setSubjectsData(users);
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  const handleClick = async (id, type) => {
    if (isClicked) return; // 이미 클릭되었다면 더 이상 진행하지 않음
    try {
      const response = await postReaction(id, type);
      setIsClicked(true); // 버튼을 비활성화 상태로 변경
      if (type === "like") {
        setLikeColor("#1877F2"); // 좋아요 색상 변경
        setLikeCount((prevState) => prevState + 1);
        setLikeChanged(true); //좋아요 그림 색상 변경
      } else if (type === "dislike") {
        setDislikeColor("black"); // 싫어요 색상 변경
        setDislikeCount((prevState) => prevState + 1);
        setDislikeChanged(true); // 싫어요 그림 색상 변경
      }
    } catch (error) {
      console.error("Failed to post reaction: ", error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true); // isPatchMode 상태를 true로 설정
  };

  const handleDeleteClick = async () => {
    try {
      await deleteAnswers(question.id); //답변 보낼때 특정 질문id로 보내기 위해 id값 추가
    } catch (error) {
      console.log(error); // 에러가 발생하면 submittingError 상태를 업데이트하여 사용자에게 피드백 제공
    } finally {
      window.location.reload();
    }
  };

  return (
    <QuestionArea>
      <QuestionHeader>
        <QuestionClearButton>
          {answer ? "답변완료" : "미답변"}
        </QuestionClearButton>
        {type ? (
          <KebabContainer>
            <Kebab onClick={toggleDropdown} />
            {isDropdownVisible ? (
              <KebabDropdown
                handleEditClick={handleEditClick}
                question={question}
                handleDeleteClick={handleDeleteClick}
              />
            ) : null}
          </KebabContainer>
        ) : null}
      </QuestionHeader>
      <QuestionTitleArea>
        <Since>질문 · {timeSince(`${question.createdAt}`)}</Since>
        <QuestionTitle>{question.content}</QuestionTitle>
      </QuestionTitleArea>
      <QuestionTextArea>
        {isEditing ? (
          <AnswerPatchTextArea
            question={question}
            subjectsData={subjectsData}
            answerData={answer.content}
            answerId={answer.id}
          />
        ) : (
          <RenderBy
            type={type}
            question={question}
            subjectsData={subjectsData}
            handleAnswer={setAnswer}
            isEditing={isEditing}
            answer={answer}
          />
        )}
      </QuestionTextArea>
      <QuestionLikeArea>
        <LikeArea
          onClick={() => {
            handleClick(question.id, "like");
          }}
          disabled={isClicked}
        >
          {likeChanged ? <LikeFocus /> : <Like />}
          <LikeText color={likeColor}>좋아요 {likeCount}</LikeText>
        </LikeArea>
        <LikeArea
          onClick={() => {
            handleClick(question.id, "dislike");
          }}
          disabled={isClicked}
        >
          {disLikeChanged ? <UnLikeFocus /> : <UnLike />}
          <LikeText color={dislikeColor}>싫어요 {dislikeCount}</LikeText>
        </LikeArea>
      </QuestionLikeArea>
    </QuestionArea>
  );
}

export default QuestionListItems;
