import { useState } from "react";
import PostButton from "./PostButton.jsx";
import PostModal from "./PostModal";
import QuestionListUser from "../../components/UI/QuestionListUser";

function Feeds({ question }) {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setModal(false);
    document.body.style.overflow = "visible";
  };
  return (
    <>
      {modal ? <PostModal closeModal={closeModal} /> : null}
      <QuestionListUser type={false} question={question} />
      <PostButton />
      <PostButton onClick={() => showModal()} />
    </>
  );
}

export default Feeds;
