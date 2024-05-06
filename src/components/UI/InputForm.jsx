import React from "react";
import styled from "styled-components";
import PostForm from "../../pages/PostForm.jsx";
import PersonIcon from "../../assets/icons/ic_person.svg"

const StyledDiv = styled.div`
  width: 400px;
  height: 172px;
  background-color: #ffffff;
  border-radius: 16px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
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