import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import OpenMindLogo from "../../assets/logo/logo.svg";
import logo from "../../assets/logo/toplogo.svg?react";
import SnsLink from "../../assets/icons/ic_link_color.svg?react";
import SnsKakaoTalk from "../../assets/icons/ic_kakaotalk_color.svg?react";
import SnsFaceBook from "../../assets/icons/ic_facebook_color.svg?react";
import ToastMessage from "./ToastMessage";
import * as func from "../../util/Sns.js";
import getUsers from "../../api/getUsers.js";
import { useParams } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-image: url("${OpenMindLogo}"); //임시 이미지 지정
  background-repeat: no-repeat;
  background-position: top center;
  @media (max-width: 576px) {
    //헤더 배경화면 반응형
    background-size: 906px;
  }
`;

const Profile = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 65px;
`;

const OpenMind = styled(logo)`
  cursor: pointer;
  width: 170px;
  height: 67px;
  @media (max-width: 576px) {
    //오픈마인드 로고 반응형
    width: 124px;
    height: 49px;
  }
`;

const TitleIcon = styled.img`
  object-fit: cover;
  max-width: 136px;
  height: 136px;
  border-radius: 200px;
  border: 1px solid black;
  background-color: skyblue;
  border: none;
  @media (max-width: 576px) {
    max-width: 104px;
    height: 104px; //프로필 사진 반응형
  }
`;
const NickName = styled.span`
  font-size: 32px;
  @media (max-width: 576px) {
    font-size: 24px; //닉네임 폰트 반응형
  }
`;
const SnsArea = styled.div`
  display: flex;
  gap: 12px;
`;

const HeadProfile = ({ name, image, subjectId }) => {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false); // 토스트메시지의 가시성
  const [subjectsData, setSubjectsData] = useState([]); //api 데이터

  const Url = window.location.href; // 현재 페이지의 URL을 가져오기

  const shareKakao = (name, image, url) => {
    func.shareKakao(name, image, url);
  };

  const shareFacebook = (url) => {
    func.shareFacebook(url);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(Url);
    setCopied(true);

    setShowToast(true); // 토스트 메시지 표시하기

    setTimeout(() => {
      setShowToast(false); // 5초후에 토스트 메시지를 숨김
    }, 5000);
  };
  const fetchSubjects = async () => {
    //데이터 가져올 함수
    const users = await getUsers(subjectId, {}); //id에 따라 동적으로 데이터 가져옴
    console.log(users);
    setSubjectsData(users);
  };
  useEffect(() => {
    fetchSubjects();
  }, []);
  return (
    <div>
      <Container>
        <Profile>
          <OpenMind />
          <TitleIcon src={subjectsData.imageSource} />
          <NickName>{subjectsData.name}</NickName>
          <SnsArea>
            <SnsLink
              onClick={handleCopyToClipboard}
              style={{ cursor: "pointer" }}
            />
            <SnsKakaoTalk
              onClick={() => {
                shareKakao(name, image, Url);
              }}
              style={{ cursor: "pointer" }}
            />
            <SnsFaceBook
              onClick={() => {
                shareFacebook(Url);
              }}
              style={{ cursor: "pointer" }}
            />
          </SnsArea>
        </Profile>
      </Container>
      {showToast && (
        <ToastMessage message="URL이 복사되었습니다" isVisible={showToast} />
      )}
    </div>
  );
};

export default HeadProfile;
