import React, { useEffect, useState } from "react";
import TextAreaItem from "./TextAreaItem";

export default function AnswerPatchTextArea({
  question,
  subjectsData,
  handleAnswer,
}) {
  useEffect(() => {
    console.log(question, subjectsData, handleAnswer);
  }, []);

  return (
    <>
      <div>수정하기 나타났다!</div>
      <div>{question.id}</div>
    </>
  );
}
