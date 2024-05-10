import React, { useState, useEffect } from "react";
import { patchAnswers } from "../api/OpenMindApi";

const AnswersPatchPage = () => {
  const [answer, setAnswer] = useState(null);
  const [content, setContent] = useState("");
  const [isRejected, setIsRejected] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://openmind-api.vercel.app/6-7/answers/4446/`
        );
        const data = await response.json();
        setAnswer(data);
        setContent(data.content);
        setIsRejected(data.isRejected);
      } catch (error) {
        console.error("Failed to fetch answer:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedAnswer = {
      content,
      isRejected,
    };

    try {
      const response = await patchAnswers(updatedAnswer);
      console.log("Answer updated:", response);
    } catch (error) {
      console.error("Failed to update answer:", error);
    }
  };

  return (
    <div>
      <h2>Edit Answer</h2>
      {answer ? (
        <form onSubmit={handleSubmit}>
          <label>
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <label>
            Is Rejected:
            <input
              type="checkbox"
              checked={isRejected}
              onChange={(e) => setIsRejected(e.target.checked)}
            />
          </label>
          <button type="submit">Update Answer</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AnswersPatchPage;
