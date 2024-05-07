import React from "react";
import styled from "styled-components";
import PersonIcon from "../assets/icons/ic_person.svg?react";
import Feeds from "./post/Feeds";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 172px;
  justify-content: center;
  background-color: white;
  border-radius: 16px;
  padding: 32px;
  gap: 4px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 336px;
  width: 100%;
  padding: 12px 16px 12px 40px;
  border: 1px solid #818181;
  border-radius: 8px;
  outline: none;
  &:focus {
    border-color: #542f1a;
    transition: border-color 0.3s ease-in-out;
  }
`;

const QuestionButton = styled.button`
  width: 100%;
  background-color: #542f1a;
  color: white;
  padding: 10px 20px;
  border: 2px solid rgba(0, 0, 0, 0.2); /*안해주면 hover 될때 인풋이 왔다갔다함-어떻게 하는게 좋은방법일까요*/
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
  }
  &:active {
    background-color: #341909;
  }
  &:disabled {
    background-color: #c7bbb5;
    cursor: not-allowed; /* 비활성화된 상태일 때 커서를 기본값으로 변경 */
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 10px;
  margin-left: 5px;
  margin-top: 5px;
`;

const StyledIcon = styled(PersonIcon)`
  width: 20px;
  height: 20px;
`;

const HomePage = () => {
  return (
    <StyledDiv>
      <InputContainer>
        <IconWrapper>
          <StyledIcon />
        </IconWrapper>
        <Input placeholder="이름을 입력하세요" />
      </InputContainer>
      <QuestionButton>질문 받기</QuestionButton>
      <Feeds />
    </StyledDiv>
  );
};

export default HomePage;
