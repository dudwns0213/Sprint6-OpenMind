import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import MessageIcon from "../../assets/icons/ic_messages.svg?react";
import CloseIcon from "../../assets/icons/ic_close.svg?react";
import IconProfile from "../../assets/icons/ic_person.svg?react";
import getUsers from "../../api/getUsers";

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

const ModalHeaderIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 7px;
`;
const ModalClose = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
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
  /* --size-- */
  width: 496px;
  height: 144px;
  /* --style-- */
  background-color: ${colors.GRAYSCALE_20};
  overflow-y: scroll;
  overflow-x: hidden;
  border: none;
  color: #000000;
  font-size: 16px;
  resize: none;

  &:focus {
    border: solid 1px ${colors.BROWN_40};
  }

  ::placeholder {
    color: ${colors.GRAYSCALE_40};
    font-size: 16px;
  }
`;

const ModalPostButton = styled.button`
  background-color: ${colors.BROWN_30};
  border-radius: 8px;
  border: none;
  height: 46px;
  color: #ffffff;
  font-size: 16px;
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

function PostModal({ closeModal, subjectId }) {
  const [inputValue, setInputValue] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [user, setUser] = useState("");

  useEffect(() => {
    setIsButtonDisabled(inputValue.trim() === "");
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
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
            <ModalPostButton disabled={isButtonDisabled}>
              질문 보내기
            </ModalPostButton>
          </ModalContent>
        </ModalPageContainer>
      </PostModalPage>
    </div>
  );
}

export default PostModal;
