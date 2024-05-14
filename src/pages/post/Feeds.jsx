import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostButton from "../../components/UI/PostButton.jsx";
import PostModal from "../../components/UI/PostModal.jsx";
import QuestionListUser from "../../components/UI/QuestionListUser";
import HeadProfile from "../../components/UI/HeadProfile.jsx";
import { useLocation } from "react-router-dom";
import { getQuestions } from "../../api/api.js";
import NoQuestion from "../../components/UI/NoQuestion.jsx";
import { Link } from "react-router-dom";

function Feeds() {
  const { state } = useLocation(); //subject id받아오기
  const [modal, setModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [isPostSubmitted, setIsPostSubmitted] = useState(false);

  const handlePostSubmitted = () => {
    setIsPostSubmitted(true);
    location.reload();
  };

  const showModal = () => {
    setModal(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setModal(false);
    document.body.style.overflow = "visible";
  };

  const fetchQuestions = async () => {
    //질문이 없으면 NoQuestion, 있으면 보여줌
    const data = await getQuestions(state, {});
    if (data.count === 0) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  useEffect(() => {
    console.log("다시 렌더링");
    fetchQuestions();
  }, [state, isPostSubmitted]);

  return (
    <>
      {modal ? (
        <PostModal
          closeModal={closeModal}
          subjectId={state}
          onPostSubmitted={handlePostSubmitted}
        />
      ) : null}
      <Link to="/">
        <HeadProfile subjectId={state} />
      </Link>
      {check ? (
        <NoQuestion />
      ) : (
        <QuestionListUser type={false} subjectId={state} />
      )}
      <PostButton onClick={() => showModal()} />
    </>
  );
}

export default Feeds;
