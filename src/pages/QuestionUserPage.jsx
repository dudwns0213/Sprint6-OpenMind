import styled from "styled-components";
import OpenLogo from "../assets/logo/openmindlogo.svg?react";
import AnswerButtonTop from "../components/UI/AnswerButtonTop";
import DropdownMenu from "../components/UI/DropdownMenu";
import UserCard from "./components/UserCard";
import { useEffect, useState } from "react";
import { getCard } from "../api/personalList";
import NextBtn from "../assets/icons/paginationNext.svg?react";
import PrevBtn from "../assets/icons/paginationPrev.svg?react";
import "./Pagination.css";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 1004px;
  padding: 40px 0 60px;
  margin: 0 auto;
`;
const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  @media (max-width: 676px) {
    flex-direction: column;
  }
`;
const OpenLogoPic = styled(OpenLogo)`
  width: 146px;
  height: 57px;
  cursor: pointer;
`;
const TitleArea = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 676px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 24px;
    margin: 52px 0 16px;
  }
`;
const WhoQuestion = styled.span`
  font-family: Actor;
  font-weight: 400;
  font-size: 40px;
  line-height: 47.73px;
  text-align: center;
  @media (max-width: 676px) {
    font-size: 24px;
    line-height: 30px;
    white-space: nowrap;
  }
`;
const QuestionListGrid = styled.div`
  width: 100%;
  height: 394px;
  display: grid;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center;
  gap: 20px;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  @media (max-width: 884px) {
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  }
  @media (max-width: 676px) {
    grid-template: repeat(3, 1fr) / repeat(2, 1fr);
    height: 536px;
    gap: 16px;
  }
`;
const PaginationArea = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  @media (max-width: 676px) {
    padding-top: 31px;
  }
`;
const NextPageBtn = styled(NextBtn)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const PrevPageBtn = styled(PrevBtn)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Ct = styled.div`
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 676px) {
    padding: 0 24px;
  }
`;

const getLimit = () => {
  const width = window.innerWidth;
  if (width < 676) {
    // Mobile viewport
    return 6;
  } else if (width < 884) {
    // Tablet viewport
    return 6;
  } else {
    // Desktop viewport
    return 8;
  }
};

function QuestionUserPage() {
  // 로컬스토리지에 담겨있는 id값을 받아서 페이지 이동에 사용하는 변수
  const idLocal = localStorage.getItem("userId");
  // api호출하고 받은 아이템 state itemList
  const [card, setCard] = useState([]);
  // api sort파라미터 값 넣어주는 state orderBy
  const [sort, setSort] = useState("name");
  // api offset파라미터 offset=0이면 0번부터 시작하는 state(api에서 limit값을 곱해줘서 이동하는 페이지마다 시작하는 item의 초깃값을 전달 현재페이지에 해당하는 currentPage라고 봐야함)
  const [offset, setOffset] = useState(1);
  // api limit파라미터 받아오는 아이템 개수 state pageSize
  const [limit, setLimit] = useState(getLimit());
  // api 호출하고 받은 아이템 전체 개수 확인 state
  const [totalCount, setTotalCount] = useState(0);
  // 받아온 아이템으로 총 page 개수 state
  const totalPages = Math.ceil(totalCount / limit);
                    //현재 페이지번호,전체 페이지 수,표시할 페이지 개수
  const getPageRange = (currentPage, totalPages, pageRange = 5) => {

    const halfRange = Math.floor(pageRange / 2); // 현재 표시할 페이지 개수를 통해서 currentPage 좌우에 표시할 페이지 개수를 정하는 변수
    let start = currentPage - halfRange; // currentPage 좌측 페이지 번호를 담당 5번페이지가 currentPage라면 3이랑 4가 좌측에서 표시되는 변수
    let end = currentPage + halfRange; // currentPage 우측 페이지 번호를 담당 5번페이지가 currentPage라면 6이랑 7이 우측에서 표시되는 변수
    if(totalPages < currentPage) {
      setOffset(totalPages);
    }
    if (start < 1) { // currentPage가 1,2,3 일 경우에 1,2,3,4,5 페이지를 유지하는 조건문 
      start = 1;
      end = pageRange;
    }

    if (end > totalPages) { // currentPage가 끝쪽에 도달했을때 end 변수값이 전체 페이지값 보다 높을시 조건실행
      end = totalPages; //end값(currentPage + halfRange)이 전체 페이지 개수보다 클때는 end값 = 전체 페이지 값
      start = (totalPages - pageRange) + 1; // end값이 totalPages값보다 클때 스타트 값
    }

    return { start, end };
  };
  const { start, end } = getPageRange(offset, totalPages); // start,end에 getPageRange(offset, totalPages)값을 할당

  const changeSortButton = sortChoice => { // 드롭다운 정렬 클릭 함수
    setSort(sortChoice); // sort값 변경
    setOffset(1); // 정렬변경시 1페이지로 이동
  };

  useEffect(() => {
    const handleCardItemLoad = async () => {
      let result = await getCard({ sort, offset, limit });
      setCard(result.results);
      setTotalCount(result.count);
    };
    const handleResize = () => {
      setLimit(getLimit());
    };

    window.addEventListener("resize", handleResize); // 화면 크기 변경할 때마다 pageSize를 다시 계산해 넣음
    
    handleCardItemLoad();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sort, offset, limit]);

  const next = () => {
    if (Math.ceil(totalCount / limit) === offset) return;
    setOffset(offset + 1);
  };

  const prev = () => {
    if (offset === 1) return;
    setOffset(offset - 1);
  };

  return (
    <Container>
      <TopArea>
        <Link to="/">
          <OpenLogoPic />
        </Link>
        <Link to={idLocal ? `/post/${idLocal}/answer` : "/"}>
          <AnswerButtonTop text="답변하러 가기" />
        </Link>
      </TopArea>
      <TitleArea>
        <WhoQuestion>누구에게 질문할까요?</WhoQuestion>
        <DropdownMenu onChangeSort={changeSortButton} />
      </TitleArea>
      <Ct>
        <QuestionListGrid>
          {card.map(item => {
            return <UserCard key={item.id} item={item} />;
          })}
        </QuestionListGrid>
      </Ct>
      <PaginationArea>
          <PrevPageBtn onClick={prev} />
          {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
            item => (
              <div
                key={item}
                className={`paginationButton ${offset === item ? "active" : ""}`}
                onClick={() => setOffset(item)}
              >
                {item}
              </div>
            )
          )}
          <NextPageBtn onClick={next} />
      </PaginationArea>
    </Container>
  );
}

export default QuestionUserPage;
