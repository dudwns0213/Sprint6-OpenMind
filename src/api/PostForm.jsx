import React, {useState} from "react";
import styled from "styled-components";
import {colors} from "../styles/colors";
import { Link } from "react-router-dom";

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
`

const QuestionButton = styled.button`
  width: 336px;
  height: 46px;
  background-color: ${colors.BROWN_40};
  cursor: pointer;
  border-radius: 8px;
  border: none;
  text-decoration: none;
  color: #ffffff;
`
const InputContainer = styled.div`
  width: 100%;
  height: 108px;
  border: none;
  background-color: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`





const PostForm = () => {

const [userName,setUserName] = useState('');

const handleInput = (event) => {
  setUserName(event.target.value);
  };

const handleSubmit = () => {
  fetch('https://openmind-api.vercel.app/6-7/subjects/',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      }).then(response => response.json())
      .then(jsonObject => {
        console.log(jsonObject);
        const nameArray = jsonObject.results.map(item => item.name)
        if(nameArray.includes(userName)) {
          const nameIndex = nameArray.findIndex(userName);
          const nameObject = jsonObject.results[nameIndex];
          const userId = nameObject.id
          return userId;
        }else{
          fetch('https://openmind-api.vercel.app/6-7/subjects/',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: {
              username: userName,
              team: "6-7"
            }
          }).then(response => response.json())
          .then(jsonResponse => {
            console.log(jsonResponse);
            const userId = jsonResponse.id
            return userId;
          }).catch(error => {
            console.error('Error:',error)
          })
        }
      }).catch(error => {
      console.error('Error:',error)
      })
}
return(
  <InputContainer>
    <Input placeholder='이름을 입력하세요' type='text' value={userName} onChange={handleInput}/>
    <Link to='/post/${userId}/answer'><QuestionButton onClick={handleSubmit}>질문 받기</QuestionButton></Link>
  </InputContainer>
)

}



export default PostForm;
