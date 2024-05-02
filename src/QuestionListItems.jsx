import styled from "styled-components";
import React from "react";
import UserLogo from "./assets/redpanda.jpg";
import Like from "./assets/ic_thumbs_up.svg"
import UnLike from "./assets/ic_thumbs_down.svg"

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
`
const LikeIcon = styled.img`
  width: 14.12px;
  height: 14.33px;
`
const UnLikeIcon = styled(LikeIcon)`
  text-align: end;
`
const LikeText = styled.span`
  font-size: 14px;
  cursor: pointer;
`

function QuestionListItems() {
  return (
    <QuestionArea>
      <QuestionClearButton value="답변 완료" />
      <QuestionTitleArea>
        <span>질문 · 2주전</span>
        <QuestionTitle>좋아하는 동물은?</QuestionTitle>
      </QuestionTitleArea>
      <QuestionTextArea>
        <QuestionTitleIcon src={UserLogo} alt="" />
        <AnswerArea>
          <QuestionUserNickNameArea>
            <h3>마초는고양이</h3>
            <span>2주전</span>
          </QuestionUserNickNameArea>
          <p>
            그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다.
            찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를
            청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에
            피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은
            방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다.
            이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃
            보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은 피다. 피가
            그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는
            봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히 듣기만 운다.
          </p>
        </AnswerArea>
      </QuestionTextArea>
      <QuestionLikeArea>
        <LikeArea>
          <LikeIcon src={Like} alt="" />
          <LikeText>좋아요</LikeText>
        </LikeArea>
        <LikeArea>
          <UnLikeIcon src={UnLike} alt="" />
          <LikeText>싫어요</LikeText>
        </LikeArea>
      </QuestionLikeArea>
    </QuestionArea>
  );
}

export default QuestionListItems;
