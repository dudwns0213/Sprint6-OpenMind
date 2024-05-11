import styled from "styled-components";
import { colors } from "../../styles/colors";
import { timeSince } from "../../util/TimeSince";

const AnswerArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AnswerContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Since = styled.span`
  color: ${colors.GRAYSCALE_40};
  font-size: 0.85rem;
`;

const IsReject = styled.p`
  color: #b93333;
`;
const TitleIcon = styled.img`
  object-fit: cover;
  max-width: 136px;
  height: 136px;
  border-radius: 200px;
  background-color: skyblue;
  border: none;
`;
const QuestionTitleIcon = styled(TitleIcon)`
  width: 48px;
  height: 48px;
`;
const QuestionUserNickNameArea = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export default function UpdatedAnswer({ answerData, subjectsData }) {
  return (
    <AnswerContainer>
      <QuestionTitleIcon src={subjectsData.imageSource} />
      <AnswerArea>
        <QuestionUserNickNameArea>
          <h3>{subjectsData.name}</h3>
          <Since>{timeSince(`${answerData.createdAt}`)}</Since>
        </QuestionUserNickNameArea>
        {answerData.isRejected ? (
          <IsReject>답변거절</IsReject>
        ) : (
          <p>{answerData.content}</p>
        )}
      </AnswerArea>
    </AnswerContainer>
  );
}
