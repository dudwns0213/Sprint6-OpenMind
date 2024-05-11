import styled from "styled-components";
import ChatIcon from "../../assets/icons/ic_messages_gray.svg";
import { Link } from "react-router-dom";

const Container = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 220px;
  max-height: 187px;
  justify-self: stretch;
  flex-grow: 0; /* 너비 증가 방지 */
  flex-shrink: 0; /* 너비 감소 방지 */
  padding: 20px;
  border-radius: 16px;
  font-size: 1rem;
  border: 1px solid #818181;
  background: white;
  .user {
    font-size: 1.25rem;
  }
  @media (max-width: 884px) {
    justify-self: center;
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 676px) {
    padding: 16px;
    min-width: 156px;
    .user {
      font-size: 18px;
    }
  }
`;

const QuestionCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #818181;
  @media (max-width: 676px) {
    p {
      font-size: 14px;
    }
  }
`;
const Question = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  img {
    width: 18px;
    height: 18px;
  }
  p {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }
  @media (max-width: 676px) {
    p {
      font-size: 14px;
    }
    img {
      width: 16px;
      height: 16px;
    }
  }
`;
const CardImgArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Profile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  @media (max-width: 676px) {
    width: 48px;
    height: 48px;
  }
`;

export default function UserCard({ item }) {
  return (
    <Container href={`/post/${item.id}/answer`}>
      <CardImgArea>
        <Profile src={item.imageSource} />
        <p className="user">{item.name}</p>
      </CardImgArea>
      <QuestionCount>
        <Question>
          <img src={ChatIcon} alt="chat icon" />
          <p>받은질문</p>
        </Question>
        <p>{item.questionCount}개</p>
      </QuestionCount>
    </Container>
  );
}
