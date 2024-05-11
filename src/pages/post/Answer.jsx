import React from "react";
import NoQuestion from "../../components/UI/NoQuestion.jsx"
import { useParams } from 'react-router-dom';


const Answer = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <NoQuestion/>
    )
}

export default Answer;