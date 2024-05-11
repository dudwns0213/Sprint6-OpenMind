import React from "react";
import styled from "styled-components";
import ArrowIcon from "../../assets/icons/arrow_right_brown.svg?react";

const Button = styled.button`
  width: 161px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f1ee;
  color: #542f1a;
  border: 1px solid #542f1a;
  border-radius: 8px;
  gap: 8px;
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
  span {
    font-family: Actor;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  }
  @media (max-width: 676px) {
    width: 127px;
    height: 34px;
    margin-top: 20px;
    gap: 4px;
    span {
      font-family: Actor;
      font-size: 14px;
      font-weight: 400;
      text-align: left;
    }
  }
`;
const StyledIcon = styled(ArrowIcon)`
  width: 18px;
  height: 18px;
`;

function QuestionButtonTop({ text }) {
  return (
    <Button>
      <span>{text}</span>
      <StyledIcon />
    </Button>
  );
}

export default QuestionButtonTop;
