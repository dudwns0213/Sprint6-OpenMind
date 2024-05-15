import React from "react";
import styled from "styled-components";
import { colors } from "@/styles/colors";

const Container = styled.div`
  max-width: 684px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const ButtonDelete = styled.button`
  background-color: ${colors.BROWN_40};
  width: 100px;
  height: 35px;
  border-radius: 200px;
  border: none;
  padding: 12px 24px;
  font-size: 15px;
  color: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 400;
  cursor: pointer;

  display: flex;
  justify-content: center; //글씨 중앙 정렬
  align-items: center; //글씨를 세로 기준으로 중앙에 오도록
  @media (max-width: 576px) {
    //삭제버튼 반응형
    width: 70px;
    height: 25px;
    font-size: 10px;
    padding: 12px 18px;
  }
`;

const DeleteButton = ({ onDelete }) => {
  return (
    <Container>
      <span></span>
      <ButtonDelete onClick={onDelete}>삭제하기</ButtonDelete>
    </Container>
  );
};

export default DeleteButton;
