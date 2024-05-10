import React, { useEffect, useState } from "react";
import AnswerContent from "./AnswerContent";
import TextAreaItem from "./TextAreaItem";

export default function RenderBy({ type, question, subjectsData }) {
  const [answer, setAnswer] = useState(question);
  useEffect(() => {
    console.log(`changed!`);
  }, [answer]);
  if (type) {
    // 답변 페이지일 때
    return question.answer ? (
      <AnswerContent
        question={question}
        subjectsData={subjectsData}
        answer={answer}
      />
    ) : (
      <TextAreaItem question={question} subjectsData={subjectsData} />
    );
  } else {
    // 피드 페이지일 때
    // question.answer가 존재하면 <AnswerContent> 컴포넌트를 렌더링
    return question.answer ? (
      <AnswerContent question={question} subjectsData={subjectsData} />
    ) : null;
  }
}
