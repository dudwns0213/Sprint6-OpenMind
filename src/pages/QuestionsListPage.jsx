import { Link } from "react-router-dom";
import QuestionsCard from "../components/UI/QuestionCard.jsx";

function QuestionsListPage() {
  return (
    <div>
      <h1>질문 목록 페이지</h1>
      <Link to="/feeds">
        <QuestionsCard />
      </Link>
    </div>
  );
}

export default QuestionsListPage;
