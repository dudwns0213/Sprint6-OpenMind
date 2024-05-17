import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import MessageIcon from "@assets/icons/ic_messages.svg?react";
import CloseIcon from "@assets/icons/ic_close.svg?react";
import { getUsers } from "@/api/OpenMindApi";

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.56);
  z-index: 2;
`;

const PostModalPage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -227px;
  margin-left: -306px;
  width: 612px;
  height: 454px;
  border-radius: 24px;
  border-style: none;
  box-shadow: 0px 16px 20px rgba(48, 48, 48, 0.62);
  background-color: ${colors.GRAYSCALE_10};
  padding: 40px 40px 104px;
  z-index: 3;
`;

const ModalPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 532px;
  padding: 0;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  font-family: Actor;
  font-size: 24px;
  color: #000000;
  margin-bottom: 40px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ModalContent = styled.div`
  height: 274px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

const ModalProfile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  gap: 4px; //프로필 이미지랑 이름 띄우기
`;

const ProfileText = styled.p`
  font-size: 18px;
`;

const TextContainer = styled.div`
  background-color: ${colors.GRAYSCALE_20};
  height: 180px;
  width: 532px;
  padding: 16px;
  border-radius: 8px;
  border: none;
  position: relative;
`;

const ModalTextArea = styled.textarea`
  position: absolute;
  width: 496px;
  height: 144px;
  background-color: ${colors.GRAYSCALE_20};
  border: none; // 테두리 제거
  font-size: 16px;
  resize: none; // 크기 조절 기능 제거
  overflow: auto; // 스크롤바 제거
  outline: 0;

  ::placeholder {
    color: ${colors.GRAYSCALE_40};
    font-size: 16px;
  }
`;

const ModalPostButton = styled.button`
  background-color: ${(props) =>
    props.disabled ? colors.BROWN_30 : colors.BROWN_40};
  border-radius: 8px;
  border: none;
  height: 46px;
  color: #ffffff;
  font-size: 16px;
  transition: transform 0.2s ease-in-out;

  &:active {
    background-color: ${(props) =>
      props.disabled ? colors.BROWN_20 : colors.BROWN_50};
    transform: scale(0.98);
  }
`;

const ProfileImg = styled.img`
  //프로필 이미지
  object-fit: cover;
  max-width: 136px;
  height: 136px;
  border-radius: 200px;
  background-color: skyblue;
  border: none;
`;
const Profile = styled(ProfileImg)`
  width: 28px;
  height: 28px;
  @media (max-width: 576px) {
    //사용자 프로필 반응형
    width: 32px;
    height: 32px;
  }
`;

function PostModal({ closeModal, subjectId, onPostSubmitted }) {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsButtonDisabled(e.target.value === ""); // 입력값이 비어있으면 버튼 비활성화
  };

  const handlePostSubmit = async () => {
    try {
      const response = await fetch(
        `https://openmind-api.vercel.app/6-7/subjects/${user.id}/questions/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subjectId: user.id,
            content: inputValue,
            like: 0,
            dislike: 0,
            team: "6-7",
            answer: {
              content: "",
              isRejected: true,
            },
          }),
        }
      );

      if (response.ok) {
        onPostSubmitted(); // 포스트 전송 성공 시 콜백 함수 호출
        closeModal(); // 모달 닫기
      } else {
        console.error("Error posting question:", response.status);
      }
    } catch (error) {
      console.error("Error posting question:", error);
    }
  };

  const fetchSubjects = async () => {
    //프로필 이미지, 이름 불러올 함수
    const users = await getUsers(subjectId, {});
    setUser(users);
  };
  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <div className="global">
      <ModalBackground onClick={closeModal}></ModalBackground>
      <PostModalPage>
        <ModalPageContainer>
          <ModalHeader>
            <HeaderContent>
              <MessageIcon />
              <p>질문을 작성하세요</p>
            </HeaderContent>
            <CloseIcon onClick={closeModal} />
          </ModalHeader>
          <ModalContent>
            <ModalProfile>
              <ProfileText>To.</ProfileText>
              <Profile src={user.imageSource} />
              <p>{user.name}</p>
            </ModalProfile>
            <TextContainer>
              <ModalTextArea
                placeholder="질문을 입력해주세요"
                value={inputValue}
                onChange={handleInputChange}
              />
            </TextContainer>
            <ModalPostButton
              onClick={handlePostSubmit}
              disabled={isButtonDisabled}
            >
              질문 보내기
            </ModalPostButton>
          </ModalContent>
        </ModalPageContainer>
      </PostModalPage>
    </div>
  );
}

export default PostModal;
