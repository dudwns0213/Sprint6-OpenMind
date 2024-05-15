import React, { useEffect, useState } from "react";
import TextAreaItem from "./TextAreaItem";
import styled from "styled-components";
import { patchAnswers } from "../../api/OpenMindApi";
import { colors } from "../../styles/colors";

const TextArea = styled.textarea`
  padding: 16px;
  background-color: #f9f9f9;
  color: #000000;
  border: 1px solid #f9f9f9;
  border-radius: 8px;
  font-size: 16px;
  line-height: 22px;
  width: 100%;
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
  width: 100%;
  height: 46px;
  gap: 8px;
  background-color: #542f1a;
  color: #fff;
  padding: 12px, 24px, 12px, 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  transition: transform 0.2s ease-in-out;

  &:active {
    background-color: ${(props) =>
      props.disabled ? colors.BROWN_20 : colors.BROWN_50};
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #c7bbb5;
    cursor: default;
    pointer-events: none;
  }
`;
const Container = styled.div`
  //반응형을 위해 div태그 추가하여 내부요소가 꽉 차게 함
  width: 100%;
`;

export default function AnswerPatchTextArea({
  question,
  subjectsData,
  answerData,
  answerId,
}) {
  const [content, setContent] = useState(answerData);
  const [isRejected, setIsRejected] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [input, setInput] = useState(false);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleInputChange = () => {
    setInput(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // 제출 시작 시 isSubmitting을 true로 설정

    try {
      const formData = { content: `${content}`, isRejected: false };
      const data = await patchAnswers(formData, answerId); //답변 보낼때 특정 질문id로 보내기 위해 id값 추가
    } catch (error) {
      console.log(error); // 에러가 발생하면 submittingError 상태를 업데이트하여 사용자에게 피드백 제공
    } finally {
      window.location.reload();
    }
  };
  useEffect(() => {
    console.log(question, subjectsData, answerData);
  }, []);

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <TextArea
            value={content}
            placeholder="수정할 내용을 입력해주세요."
            onChange={handleContentChange}
          />
          <CompleteButton
            type="submit"
            disabled={isSubmitting}
            onClick={handleInputChange}
          >
            수정 완료
          </CompleteButton>
        </form>
      </Container>
    </>
  );
}
