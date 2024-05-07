import React from "react";
import { useState } from "react";
import styled from "styled-components";
import OpenMindLogo from "../../assets/logo/logo.svg";
import logo from "../../assets/logo/toplogo.svg?react";
import SnsLink from "../../assets/icons/ic_link_color.svg?react";
import SnsKakaoTalk from "../../assets/icons/ic_kakaotalk_color.svg?react";
import SnsFaceBook from "../../assets/icons/ic_facebook_color.svg?react";
import ToastMessage from "./ToastMessage";
import * as func from "../../util/Sns.js";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-image: url("${OpenMindLogo}"); //임시 이미지 지정
  background-repeat: no-repeat;
  background-position: top center;
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
`;

const TitleIcon = styled.img`
  object-fit: cover;
  max-width: 136px;
  height: 136px;
  border-radius: 200px;
  border: 1px solid black;
  background-color: skyblue;
  border: none;
`;
const NickName = styled.span`
  font-size: 32px;
`;
const SnsArea = styled.div`
  display: flex;
  gap: 12px;
`;

const HeadProfile = ({ name, image }) => {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false); // 토스트메시지의 가시성

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
  return (
    <div>
      <Container>
        <Profile>
          <OpenMind src={logo} alt="OpenMind 로고" />
          <TitleIcon src={SnsFaceBook} />
          {/* 임시 이미지 지정 */}
          <NickName>아초는고양이</NickName>
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
