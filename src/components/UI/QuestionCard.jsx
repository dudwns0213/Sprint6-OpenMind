import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 100px;
  border: solid 1px #999;
`;

function QuestionsCard() {
  return (
    <Container>
      <h3>유저카드</h3>
      <p>받은질문</p>
    </Container>
  );
}

export default QuestionsCard;
