import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {colors} from "../styles/colors"


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


function PostForm() {
    const [userName,setUserName] = useState('');

    const handleInput = (event) => {
        setUserName(event.target.value);
    };

    const data = {
        userName: userName,
        team: "6-7"
    };
    const jsonData = JSON.stringify(data);

    const handleSubmit = () => {
        fetch('https://openmind-api.vercel.app/6-7/subjects/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
        }).then(response => response.txt)
        .catch(error => {
            console.error('Error:',error)
        })
    }
    

    return (
        <InputContainer>
            <Input placeholder='이름을 입력하세요' type='text' value={userName} onChange={handleInput}/>
            <Link to="/post/answer"><QuestionButton onClick={handleSubmit}>질문 받기</QuestionButton></Link>
        </InputContainer>
    )
}


export default PostForm;


