import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import {colors} from "../../styles/colors";
import InputForm from "../../components/UI/InputForm";
import QuestionButtonTop from "../../components/UI/QuestionButtonTop";
import Logoimg from "../../assets/logo/txt_logo.svg?react";
import BackImg from "../../assets/logo/img_logo.svg?react";


const BackColor = styled.div`
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

const BackgroundImg = styled(BackImg)`
  position: fixed;
  bottom: 0;
  z-index: -5;
  width: auto;
  height: 100%;

  fill: none;
  
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
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

const TitleLogo = styled(Logoimg)`
  width: 456px;
  height: 180px;

  @media (max-width: 767px) {
    width: 248px;
    height: 98px;
    position: fixed;
    top: 80px;
  }
`


function HomePage() {
  return (
    <BackColor>
      <BackgroundImg/>
      <Link to="/list"><QuestionButtonTop/></Link>
      <MainContainer>
        <TitleLogo/>
        <InputForm/>
      </MainContainer>
    </BackColor>
  )
}

export default HomePage;