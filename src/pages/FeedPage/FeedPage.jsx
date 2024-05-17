import { useState, useEffect } from "react";
import PostButton from "./components/PostButton.jsx";
import PostModal from "./components/PostModal.jsx";
import QuestionListUser from "@components/UI/FeedAnswerShared/QuestionListUser.jsx";
import HeadProfile from "@components/Layout/HeadProfile.jsx";
import { useLocation } from "react-router-dom";
import { getQuestions } from "@/api/OpenMindApi.js";
import NoQuestion from "@components/UI/NoQuestion.jsx";

function FeedPage() {
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
      <HeadProfile subjectId={state} />
      {check ? (
        <NoQuestion />
      ) : (
        <QuestionListUser type={false} subjectId={state} />
      )}
      <PostButton onClick={() => showModal()} />
    </>
  );
}

export default FeedPage;
