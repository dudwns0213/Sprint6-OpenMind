import React from "react";
import styled from "styled-components";
import ArrowIcon from "../../assets/icons/arrow_right.svg?react";

const Background = styled.div`
  
  background-color: none;

  @media (max-width: 676px) {
    display: flex;
    justify-content: center;
  }
`

const Button = styled.button`
  width: 161px;
  height: 46px;
  background-color: #f5f1ee;
  color: #542f1a;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid #542f1a;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  top: 45px;
  right: 130px;
  text-decoration: none;
  padding: 12px 42px 12px 13px;
  
  &:hover {
    border: 2px solid #542f1a;
  }
  &:active {
    background-color: #e4d5c9;
  }
  &:disabled {
    background-color: #f5f1ee;
    border: 1px solid #c7bbb5;
    cursor: not-allowed; /* 비활성화된 상태일 때 커서를 기본값으로 변경 */
  }

  @media (max-width: 1280px) {
    right: 50px;
  }
  @media (max-width: 767px) {
    top: 202px;
    right: auto;
    left: 50%;
    transform: translateX(-50%);    
  } 
`;

const StyledIcon = styled(ArrowIcon)`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 14px;
  right: 14px;
  fill: #542f1a;
`;

function QuestionButtonTop() {
  return (
    <Background>
      <Button>
        질문하러 가기
        <StyledIcon />
      </Button>
    </Background>  
  );
}

export default QuestionButtonTop;
