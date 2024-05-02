import React from "react";
import styled from "styled-components";
import ArrowIcon from "../../assets/icons/arrow_right.svg?react";

const Button = styled.button`
  width: 161px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f1ee;
  color: #542f1a;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 24px;
  border: 1px solid #542f1a;
  border-radius: 8px;
  cursor: pointer;
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
`;
const StyledIcon = styled(ArrowIcon)`
  width: 18px;
  height: 18px;
`;

const QuestionButtonTop = ({ text }) => {
  return (
    <Button>
      {text}질문하러 가기
      <StyledIcon />
    </Button>
  );
};

export default QuestionButtonTop;
