import { useState } from "react";
import PostButton from "../../components/UI/PostButton.jsx";
import PostModal from "../../components/UI/PostModal.jsx";
import QuestionListUser from "../../components/UI/QuestionListUser";
import HeadProfile from "../../components/UI/HeadProfile.jsx";
import { useLocation } from 'react-router-dom';

function Feeds() {
  const [modal, setModal] = useState(false);
  
  const { state } = useLocation();
  console.log(state);

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
      <HeadProfile />
      <QuestionListUser type={false} />
      <PostButton onClick={() => showModal()} />
    </>
  );
}

export default Feeds;
