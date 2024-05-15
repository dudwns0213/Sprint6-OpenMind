import React from "react";
import styled from "styled-components";
import EditIcon from "../../assets/icons/ic_edit.svg?react";
import DeleteIcon from "../../assets/icons/ic_close.svg?react";
import { colors } from "../../styles/colors";
const Container = styled.div`
  position: absolute;
  top: 30px;
  right: -5px;
  border: 1px solid ${colors.GRAYSCALE_30};
  border-radius: 8px;
  background-color: #fff;
`;
const Box = styled.div`
  display: flex;
  gap: 5px;
  color: ${colors.GRAYSCALE_50};
  font-size: 14px;
  padding: 12px 20px;
  line-height: 16px;
  &:hover {
    color: #1877f2;
  }
`;

export default function KebabDropdown({ handleEditClick, handleDeleteClick }) {
  return (
    <Container>
      <Box onClick={handleEditClick}>
        <EditIcon width="16px" height="16px" />
        <p>수정하기</p>
      </Box>
      <Box onClick={handleDeleteClick}>
        <DeleteIcon width="16px" height="16px" />
        <p>삭제하기</p>
      </Box>
    </Container>
  );
}
