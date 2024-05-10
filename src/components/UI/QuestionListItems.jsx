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
import postReaction from "../../api/postReaction";
import AnswerContent from "./AnswerContent";
import RenderBy from "./RenderBy";

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
  @media (max-width: 576px) {
    //질문 내용 반응형
    font-size: 16px;
  }
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
  color: ${(props) => props.color || "black"};
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
const IsReject = styled.p`
  color: #b93333;
`;

function QuestionListItems({ type, question }) {
  //props 내려서 type에 따라 보이는 컴포넌트 변경(kebab, textarea)
  const [subjectsData, setSubjectsData] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [likeColor, setLikeColor] = useState("black");
  const [dislikeColor, setDislikeColor] = useState("black");
  const [likeCount, setLikeCount] = useState(question.like);
  const [dislikeCount, setDislikeCount] = useState(question.dislike);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const fetchSubjects = async () => {
    const users = await getUsers();
    // console.log(users);
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
        setDislikeColor(`${colors.GRAYSCALE_40}`);
        setLikeCount((prevState) => prevState + 1);
      } else if (type === "dislike") {
        setDislikeColor("#1877F2"); // 싫어요 색상 변경
        setLikeColor(`${colors.GRAYSCALE_40}`);
        setDislikeCount((prevState) => prevState + 1);
      }
    } catch (error) {
      console.error("Failed to post reaction: ", error);
    }
  };

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
        {/* <AnswerContent
          type={type}
          question={question}
          subjectsData={subjectsData}
        /> */}
        <RenderBy type={type} question={question} subjectsData={subjectsData} />
      </QuestionTextArea>
      <QuestionLikeArea>
        <LikeArea
          onClick={() => handleClick(question.id, "like")}
          disabled={isClicked}
        >
          <Like />
          <LikeText color={likeColor}>좋아요 {likeCount}</LikeText>
        </LikeArea>
        <LikeArea
          onClick={() => handleClick(question.id, "dislike")}
          disabled={isClicked}
        >
          <UnLike />
          <LikeText color={dislikeColor}>싫어요 {dislikeCount}</LikeText>
        </LikeArea>
      </QuestionLikeArea>
    </QuestionArea>
  );
}

export default QuestionListItems;
