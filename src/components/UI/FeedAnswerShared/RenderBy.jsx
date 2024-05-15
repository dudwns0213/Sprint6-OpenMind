import React, { useEffect, useState } from "react";
import AnswerContent from "./AnswerContent";
import TextAreaItem from "@/pages/AnswerPage/components/TextAreaItem";

export default function RenderBy({
  type,
  question,
  subjectsData,
  handleAnswer,
}) {
  const [answer, setAnswer] = useState(question);

  if (type) {
    // 답변 페이지일 때
    return question.answer ? (
      <AnswerContent
        question={question}
        subjectsData={subjectsData}
        answer={answer}
      />
    ) : (
      <TextAreaItem
        question={question}
        subjectsData={subjectsData}
        handleAnswer={handleAnswer}
      />
    );
  } else {
    // 피드 페이지일 때
    // question.answer가 존재하면 <AnswerContent> 컴포넌트를 렌더링
    return question.answer ? (
      <AnswerContent question={question} subjectsData={subjectsData} />
    ) : null;
  }
}
