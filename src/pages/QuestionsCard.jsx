import React from "react";

function QuestionsCard({ question }) {
  return (
    <div>
      <h3>{question.content}</h3>
      <p>좋아요: {question.like}</p>
      <p>싫어요: {question.dislike}</p>
      {question.answer && (
        <div>
          <h4>답변:</h4>
          <p>{question.answer.content}</p>
        </div>
      )}
    </div>
  );
}

export default QuestionsCard;
