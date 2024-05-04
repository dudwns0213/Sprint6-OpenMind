import React from "react";
import "./ToastMessage.css"; // 토스트 메시지 스타일 정의

const ToastMessage = ({ message, isVisible }) => {
  if (!isVisible) return null; // 토스트 메시지가 보이지 않을 때 아무것도 반환하지 않음

  return <div className="toast-message">{message}</div>;
};

export default ToastMessage;
