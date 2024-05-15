import React from "react";
import styled from "styled-components";
import EditIcon from "../../assets/icons/ic_edit.svg?react";
import DeleteIcon from "../../assets/icons/ic_close.svg?react";
import RejectIcon from "../../assets/icons/ic_rejection.svg?react";
import rejectAnswer from "../../api/rejectAnswer";
import { colors } from "../../styles/colors";
const Container = styled.div`
  position: absolute;
  top: 30px;
  right: -5px;
  border: 1px solid ${colors.GRAYSCALE_30};
  border-radius: 8px;
  background-color: #fff;
`;
const Box = styled.button`
  //disabled 속성 사용하기 위해 button으로 바꿈
  display: flex;
  gap: 5px;
  color: ${colors.GRAYSCALE_50};
  font-size: 14px;
  padding: 12px 20px;
  line-height: 16px;
  &:hover {
    color: #1877f2;
  }
  &:disabled {
    color: #ddd;
    cursor: default;
    pointer-events: none;
  }
`;
export default function KebabDropdown({
  handleEditClick,
  handleDeleteClick,
  question,
}) {
  const handleReject = async (e) => {
    //답변거절 기능
    e.preventDefault();
    try {
      const data = await rejectAnswer(question.answer.id, { isRejected: true });
      location.reload(); //리렌더링 대신 새로고침..
    } catch (error) {
      console.log(`에러발생: ${error}`);
    }
  };

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
      <Box
        onClick={handleReject}
        disabled={!question.answer || question.answer.isRejected}
      >
        <RejectIcon width="16px" height="16px" />
        <p>거절하기</p>
      </Box>
    </Container>
  );
}
