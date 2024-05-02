import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  padding: 16px;
  background-color: #f9f9f9;
  color: #000000;
  border: 1px solid #f9f9f9;
  border-radius: 8px;
  font-size: 16px;
  line-height: 22px;
  width: 532px;
  height: 180px; // 디자인에 맞춰 textarea 영역의 기본 높이를 설정해 주세요
  resize: none; // 우측 하단 코너의 textarea 영역 크기 조절 기능을 없애줍니다

  &::placeholder {
    color: #818181;
  }
  &:focus {
    outline: none;
    border: 1px solid #542f1a; /* 포커스될 때 border 색상 */
  }
`;

const CompleteButton = styled.button`
  width: 532px;
  height: 46px;
  gap: 8px;
  background-color: #542f1a;
  color: #fff;
  padding: 12px, 24px, 12px, 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #542f1a;
  }

  &:disabled {
    background-color: #c7bbb5;
    cursor: default;
    pointer-events: none;
  }
`;

function TextAreaItem({ id, placeholder }) {
  return (
    <div>
      <TextArea id={id} placeholder={placeholder} />
      <CompleteButton>답변 완료</CompleteButton>
    </div>
  );
}

export default TextAreaItem;
