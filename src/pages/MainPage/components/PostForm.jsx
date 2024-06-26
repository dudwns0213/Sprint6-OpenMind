import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import { useNavigate } from "react-router-dom";
import { getSubject } from "@/api/OpenMindApi";

const Input = styled.input`
  width: 336px;
  height: 46px;
  border: solid 1px ${colors.GRAYSCALE_40};
  border-radius: 8px;
  background-color: #ffffff;
  padding: 12px 40px;

  &:focus {
    border: solid 1px ${colors.BROWN_40};
  }

  @media (max-width: 767px) {
    width: 257px;
  }
`;

const QuestionButton = styled.button`
  width: 336px;
  height: 46px;
  background-color: ${colors.BROWN_40};
  cursor: pointer;
  border-radius: 8px;
  border: none;
  text-decoration: none;
  color: #ffffff;

  transition: transform 0.2s ease-in-out;

  &:active {
    background-color: ${(props) =>
      props.disabled ? colors.BROWN_20 : colors.BROWN_50};
    transform: scale(0.98);
  }

  @media (max-width: 767px) {
    width: 257px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  height: 108px;
  border: none;
  background-color: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PostForm = () => {
  const navigate = useNavigate();
  const userStorage = window.localStorage;

  const [userId, setUserId] = useState();

  const [userName, setUserName] = useState("");

  const handleInput = (event) => {
    setUserName(event.target.value);
    return userName;
  };

  const handleSubmit = async () => {
    try {
      const jsonObject = await getSubject();
      const nameArray = jsonObject.results.map((item) => item.name);
      userStorage.clear();
      if (nameArray.includes(userName)) {
        const nameIndex = nameArray.indexOf(userName);
        const nameObject = jsonObject.results[nameIndex];
        setUserId(nameObject.id);
        userStorage.setItem(`userId`, nameObject.id);
        navigate(`post/${nameObject.id}/answer`);
      } else {
        const response = await fetch(
          "https://openmind-api.vercel.app/6-7/subjects/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: userName,
              team: "6-7",
            }),
          }
        );
        const jsonResponse = await getSubject();
        const nameObject = jsonResponse.results[0];
        setUserId(nameObject.id);
        userStorage.setItem(`userId`, nameObject.id);
        navigate(`post/${nameObject.id}/answer`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InputContainer>
      <Input
        placeholder="이름을 입력하세요"
        type="text"
        onChange={handleInput}
      />
      <QuestionButton onClick={handleSubmit}>질문 받기</QuestionButton>
    </InputContainer>
  );
};
export default PostForm;
