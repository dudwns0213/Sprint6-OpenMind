import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getQuestions from "../api/OpenMindApi";
import QuestionsCard from "./QuestionsCard";

function QuestionsListPage() {
  const [questionsData, setQuestionsData] = useState([]);
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);

  const fetchQuestions = async ({ limit, offset }) => {
    const data = await getQuestions({ limit, offset });
    console.log(data);
    setQuestionsData(data);
  };

  useEffect(() => {
    fetchQuestions({ limit, offset });
  }, [limit, offset]);

  return (
    <div>
      <div>
        질문 리스트 페이지
        {questionsData.results?.map((question) => (
          <Link to={`/`} key={`${question.id}`}>
            <QuestionsCard question={question} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuestionsListPage;
