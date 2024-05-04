import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

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

  position: absolute; //버튼 위치 배치하기
  top: 50%;
  right: 265px;
  transform: translateY(-90%);

  display: flex;
  align-items: center; //글씨를 세로 기준으로 중앙에 오도록
`;

const DeleteButton = () => {
  return <ButtonDelete>삭제하기</ButtonDelete>;
};

export default DeleteButton;
