import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import QuestionIcon from "../../assets/icons/ic_messages.svg?react";
import QuestionListItems from "./QuestionListItems";
import getQuestions from "../../api/api.js";
import DeleteButton from "./DeleteButton.jsx";
import deleteQuestion from "../../api/deleteQuestions.js";

const QuestionBox = styled.div`
  background-color: #f5f1ee;
  max-width: 684px;
  margin: 0 auto 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #c7bbb5;
  border-radius: 16px;
  padding: 16px;
`;

const QuestionBrownText = styled.div`
  color: #542f1a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px; //
  gap: 8px;

  @media (max-width: 576px) {
    //몇개의 질문이 있습니다 반응형
    font-size: 18px;
  }
`;
const StyledDiv = styled.div`
  padding: 16px; //여백 추가
`;
const Loading = styled.div`
  //로딩중임을 표시함
  text-align: center;
`;
function QuestionListUser({ type }) {
  const [questionsData, setQuestionsData] = useState([]);
  const [next, setNext] = useState(""); //api의 next 파라미터 가져와서 다음에 가져올 데이터 url 저장
  // const [limit, setLimit] = useState();
  // const [offset, setOffset] = useState(0);
  const [rendered, setRendered] = useState(false);
  const [loading, setLoading] = useState(false); //로딩 상태
  const bottom = useRef(null); //무한 스크롤을 위한 참조 생성

  const fetchQuestions = async () => {
    const data = await getQuestions();

    setQuestionsData(data);
    setNext(`${data.next}`); //처음 데이터 받아올때 next에 다음 가져올 데이터 url 저장
  };
  useEffect(() => {
    fetchQuestions();
    setLoading(true);
  }, []);

  useEffect(() => {
    //무한 스크롤 구현
    const observer = new IntersectionObserver(
      (entries) => {
        if (next == null) return setLoading(false); //다음 페이지가 없을 경우 함수 종료
        //관찰 대상(페이지 맨아래)가 화면에 들어왔는지 확인 + 첫 데이터 불러온 후에 실행하게 함
        if (entries[0].isIntersecting && loading) {
          //추가 데이터 로드 함수
          async function fetchMore() {
            setLoading(true);
            const response = await fetch(`${next}`); //다음 페이지 요청
            const newData = await response.json();
            setQuestionsData((prev) => {
              return {
                ...prev,
                results: prev.results.concat(newData.results),
                //기존 데이터에 추가 데이터를 합침
              };
            });
            setNext(`${newData.next}`); //next url 업데이트
            setLoading(false); //로딩 상태 해제
          }
          fetchMore(); //추가 데이터 로드 함수 실행
        }
      },
      { threshold: 1.0 } //관찰 대상이 완전히 화면에 들어왔을 때 콜백함수 실행함
    );
    observer.observe(bottom.current); //관찰대상 = 페이지 맨 아래

    return () => observer.disconnect(); //컴포넌트 언마운트시 observer 인스턴스 해제함
  }, [next]); //새로운 url 변경될 때마다 실행시킴

  const handleDeleteAllQuestions = async () => {
    console.log("질문삭제");
    try {
      // 질문 데이터가 없으면 삭제를 수행하지 않음
      if (questionsData.results.length === 0) {
        console.log("삭제할 질문이 없습니다.");
        return;
      }
      // 모든 질문 삭제 요청을 동시에 보내고, 모든 요청이 완료될 때까지 기다림
      await Promise.all(
        questionsData.results.map(async (question) => {
          const data = await deleteQuestion(question.id);
          setQuestionsData(data);
          console.log(`질문 삭제: ${question.id}`);
        })
      );
    } catch (error) {
      console.error("질문 삭제 실패", error);
    }
  };

  return (
    <StyledDiv>
      {type ? <DeleteButton onDelete={handleDeleteAllQuestions} /> : null}
      <QuestionBox>
        <QuestionBrownText>
          <QuestionIcon />
          <span>{questionsData?.count || 0}개의 질문이 있습니다</span>
        </QuestionBrownText>
        {questionsData?.results?.map((question) => (
          <QuestionListItems
            question={question}
            key={`${question.id}`}
            type={type}
          />
        ))}
        {loading ? <Loading>로딩중...</Loading> : null}
        <div ref={bottom}></div>
      </QuestionBox>
    </StyledDiv>
  );
}

export default QuestionListUser;
