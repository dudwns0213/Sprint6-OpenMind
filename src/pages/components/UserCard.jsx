import styled from "styled-components";
import ChatIcon from "../../assets/icons/ic_messages.svg";

const Container = styled.div`
  box-sizing: border-box;
  * {
    margin: 0;
    padding: 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 220px;
  height: 187px;
  padding: 20px;
  border-radius: 16px;
  font-size: 1rem;
  border: 1px solid #818181;
  background: white;
  .user {
    font-size: 1.25rem;
  }
  img {
    margin-right: 5px;
  }
`;

const QuestionCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #818181;
  margin-top: 10px;
`;
const Question = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: crimson;
`;

export default function UserCard() {
  return (
    <Container>
      <Profile />
      <p className="user">고양이</p>
      <QuestionCount>
        <Question>
          <img src={ChatIcon} alt="chat icon" />
          <p>받은 질문</p>
        </Question>
        <p>9개</p>
      </QuestionCount>
    </Container>
  );
}
