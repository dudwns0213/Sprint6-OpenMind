import React from "react";
import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 0.9;
  }
  to {
    opacity: 0;
  }
`;

const ToastMessageContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
  opacity: 0.9;
  transition: opacity 0.5s ease-out;

  ${({ isVisible }) =>
    !isVisible &&
    `
    animation: ${fadeOut} 0.5s ease-out forwards;
  `}
`;

const ToastMessage = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <ToastMessageContainer isVisible={isVisible}>
      {message}
    </ToastMessageContainer>
  );
};

export default ToastMessage;
