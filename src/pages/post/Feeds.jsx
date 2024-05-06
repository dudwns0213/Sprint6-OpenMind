import PostButton from "./PostButton.jsx";
import QuestionListUser from "../../components/UI/QuestionListUser";

function Feeds() {
  return (
    <>
      <QuestionListUser type={false} />
      <PostButton />
    </>
  );
}

export default Feeds;
