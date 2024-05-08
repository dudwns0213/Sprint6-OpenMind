import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import {colors} from "../../styles/colors";
import InputForm from "../../components/UI/InputForm";
import QuestionButtonTop from "../../components/UI/QuestionButtonTop";
import PersonIcon from "../../assets/icons/ic_person.svg";
import BackImg from "../../assets/logo/logo.svg";


const Background = styled.div`
  background-color: ${colors.GRAYSCALE_20};
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BackgroundImg = styled.img`
  position: fixed;
  z-index: -5;
  bottom: 0;
  
  width: 100%;
  height: auto;
`

const MainContainer = styled.div`
  background-color: none;
  width: 100%;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const TitleLogo = styled.img`
  width: 456px;
  height: 180px;
`
//해당 이미지는 피그마에서 제공해주고 있지 않아 임의로 다른 파일을 사용했습니다.

function HomePage() {
  return (
    <Background>
      <BackgroundImg src={BackImg}/>
      <Link to="/list"><QuestionButtonTop/></Link>
      <MainContainer>
        <TitleLogo src={PersonIcon}/>
        <InputForm/>
      </MainContainer>
    </Background>
  )
}

export default HomePage;