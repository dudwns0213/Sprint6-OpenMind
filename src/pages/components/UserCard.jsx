import styled from "styled-components";
import ChatIcon from "../../assets/icons/ic_messages_gray.svg";
import { Link, useNavigate } from "react-router-dom";

const StyledLink = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 187px;
  padding: 20px;
  border-radius: 16px;
  font-size: 1rem;
  border: 1px solid #818181;
  background: white;
  .user {
    font-size: 1.25rem;
  }
  @media (max-width: 676px) {
    width: 90%;
    height: 168px;
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
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${item.id}/`, { state: item.id });
    console.log(item);
  };
  return (
    <StyledLink onClick={handleClick}>
      <Container>
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
    </StyledLink>
  );
}
