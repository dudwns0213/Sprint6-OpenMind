import styled from "styled-components";
import React from "react";
import OpenMindBackImg from "./assets/backImg.svg";
import OpenMindLogo from "./assets/logo.svg";
import UserLogo from "./assets/redpanda.jpg";
import SnsLink from "./assets/ic_link.svg";
import SnsKaKaoTalk from "./assets/ic_kakaotalk.svg";
import SnsFacebook from "./assets/ic_facebook.svg";
import QuestIcon from "./assets/ic_messages.svg";
import QuestionListItems from "./QuestionListItems";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-image: url("${OpenMindBackImg}");
  background-repeat: no-repeat;
  background-position: top center;
`;
const Profile = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 54px;
`;
const OpenMind = styled.img`
  cursor: pointer;
  width: 170px;
  height: 67px;
`;
const TitleIcon = styled.img`
  object-fit: cover;
  max-width: 136px;
  height: 136px;
  border-radius: 200px;
  border: 1px solid black;
  background-color: skyblue;
  border: none;
`;
const NickName = styled.span`
  font-size: 32px;
`;
const SnsArea = styled.div`
  display: flex;
  gap: 12px;
`;
const SnsIcon = styled.img`
  border-radius: 50%;
  cursor: pointer;
`;
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
const QuestionCreateBtnArea = styled.div`
  display: flex;
  justify-content: end;
  padding: 24px 12px;
`
const QuestionCreateBtn = styled.button`
  width: 208px;
  height: 54px;
  padding: 12px 24px;
  border-radius: 200px;
  border: none;
  background-color: #542f1a;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  box-shadow: 2px 5px 10px gray;
  cursor: pointer;
`;

function QuestionListUser() {
  return (
    <Container>
      <Profile>
        <OpenMind src={OpenMindLogo} alt={OpenMindLogo} />
        <TitleIcon src={UserLogo} />
        <NickName>아초는고양이</NickName>
        <SnsArea>
          <SnsIcon src={SnsLink} />
          <SnsIcon src={SnsKaKaoTalk} />
          <SnsIcon src={SnsFacebook} />
        </SnsArea>
      </Profile>
      <QuestionBox>
        <QuestionBrownText>
          <QuestionIcon src={QuestIcon} alt={QuestIcon} />
          <span>3개의 질문이 있습니다</span>
        </QuestionBrownText>
        <QuestionListItems />
      </QuestionBox>
      <QuestionCreateBtnArea>
        <QuestionCreateBtn>질문 작성하기</QuestionCreateBtn>
      </QuestionCreateBtnArea>
    </Container>
  );
}

export default QuestionListUser;
