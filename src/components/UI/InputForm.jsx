import React from "react";
import styled from "styled-components";
import PersonIcon from "../../assets/icons/ic_person.svg";
import PostForm from "./PostForm";


const StyledDiv = styled.div`
  width: 400px;
  height: 172px;
  background-color: #ffffff;
  border-radius: 16px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    display: block;
    width: 305px;
    height: 156px;
    position: fixed;
    top: 260px;
  }
`

const FormContainer = styled.div`
  width: 336px;
  height: 108px;
  border: none;
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 767px) {
    width: 257px;
  }
`

const StyledIcon = styled.img`
  position: absolute;
  top: 12px;
  left: 16px;
  width: 20px;
  height: 20px;
`

const InputForm = () => (
  <StyledDiv>
    <FormContainer>
      <StyledIcon src={PersonIcon}/>
      <PostForm/>
    </FormContainer>
  </StyledDiv>
);

export default InputForm;
