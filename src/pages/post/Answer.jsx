import React from "react";
import NoQuestion from "../../components/UI/NoQuestion.jsx"
import { useParams } from 'react-router-dom';


const Answer = () => {
    const { userId } = useParams();
    
    return (
        <NoQuestion/>
    )
}

export default Answer;