import styled from "styled-components";
import React from "react";
import Like from "../../assets/icons/ic_thumbs_up.svg?react";
import UnLike from "../../assets/icons/ic_thumbs_down.svg?react";
import { useParams } from 'react-router-dom';

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
const QuestionClearButton = styled.button`
  color: #542f1a;
  background-color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
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
  gap: 6px;
  color: #818181;
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
  cursor: pointer;
`;

function QuestionListItems() {
  const { itemId } = useParams();

  return (
    <QuestionArea>
      <div>실행값{itemId}</div>
      <QuestionClearButton value="답변 완료" />
      <QuestionTitleArea>
        <span>질문 · 2주전</span>
        <QuestionTitle>좋아하는 동물은?</QuestionTitle>
      </QuestionTitleArea>
      <QuestionTextArea>
        <QuestionTitleIcon src="" alt="" />
        <AnswerArea>
          <QuestionUserNickNameArea>
            <h3>마초는고양이</h3>
            <span>2주전</span>
          </QuestionUserNickNameArea>
          <p>
            그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다.
          </p>
        </AnswerArea>
      </QuestionTextArea>
      <QuestionLikeArea>
        <LikeArea>
          <Like />
          <LikeText>좋아요</LikeText>
        </LikeArea>
        <LikeArea>
          <UnLike />
          <LikeText>싫어요</LikeText>
        </LikeArea>
      </QuestionLikeArea>
    </QuestionArea>
  );
}

export default QuestionListItems;
