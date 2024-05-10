import React from "react";
import styled from "styled-components";
import { useState } from "react";
import createAnswers from "../../api/createAnswers";
import { useEffect } from "react";
import AnswerContent from "./AnswerContent";

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

function TextAreaItem({ question, subjectsData }) {
  const [content, setContent] = useState("");
  //const [questionId, SetquestionId] = useState(9959);
  const [isRejected, setisRejected] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [answerData, setAnswerData] = useState(question.answer); //답변 추가하면 보관됨
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
      const formData = JSON.stringify({
        content: `${content}`,
        isRejected: `${isRejected}`,
      });

      const data = await createAnswers(formData);
      setAnswerData(data.content); // 성공적으로 답변을 생성하면 answerData 상태를 업데이트
    } catch (error) {
      setSubmittingError(error); // 에러가 발생하면 submittingError 상태를 업데이트하여 사용자에게 피드백 제공
    } finally {
      setIsSubmitting(false); // 작업 완료 후 isSubmitting을 false로 설정
    }
  };

  return (
    <>
      {answerData ? null : ( // <AnswerContent question={question} subjectsData={subjectsData} />
        <form onSubmit={handleSubmit}>
          <TextArea
            value={content}
            placeholder="답변을 입력해주세요"
            onChange={handleContentChange}
          />
          <CompleteButton
            type="submit"
            disabled={isSubmitting}
            onClick={handleInputChange}
          >
            답변 완료
          </CompleteButton>
          {submittingError && <div>{submittingError.message}</div>}
        </form>
      )}
    </>
  );
}

export default TextAreaItem;
