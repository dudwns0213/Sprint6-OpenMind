import styled from "styled-components";
import { colors } from "../../styles/colors";

const ButtonPost = styled.button`
  background-color: ${colors.BROWN_40};
  width: 208px;
  height: 54px;
  border-radius: 200px;
  border: none;
  padding: 12px 24px;
  font-size: 20px;
  color: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  bottom: 20px;
  right: 15%;
  @media (max-width: 884px) {
    right: 5%;
  }
  @media (max-width: 576px) {
    width: 123px;
    right: 5%;
    padding: 0;
  }
`;

function PostButton({ onClick }) {
  return (
    <ButtonPost onClick={onClick}>
      {window.innerWidth <= 576 ? "질문 작성" : "질문 작성하기"}
    </ButtonPost>
  );
}

export default PostButton;
