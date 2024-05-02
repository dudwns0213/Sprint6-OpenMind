import styled from "styled-components";
import MessagesIcon from "../../assets/icons/ic_messages.svg";
import EmptyBox from "../../assets/logo/noquestions.svg";

const ImageBox = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 716px;
  height: 330px;
  background-color: #f5f1ee;
  border: 1px solid #e4d5c9;
  border-radius: 16px;
  div {
    position: absolute;
    top: 0px;
    display: flex;
    align-items: center;
    color: #542f1a;
    font-size: 1.25rem;
    img {
      margin-right: 5px;
    }
  }
`;

export default function NoQuestion() {
  return (
    <ImageBox>
      <div>
        <img src={MessagesIcon} alt="messages icon" />
        <p>아직 질문이 없습니다</p>
      </div>
      <img src={EmptyBox} alt="emptybox" />
    </ImageBox>
  );
}
