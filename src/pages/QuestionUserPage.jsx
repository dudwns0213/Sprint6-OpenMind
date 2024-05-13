import styled from "styled-components";
import OpenLogo from "../assets/logo/openmindlogo.svg?react";
import QuestionButtonTop from "../components/UI/QuestionButtonTop";
import { colors } from "../styles/colors";
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
  max-width: 940px;
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
  // api호출하고 받은 아이템 state
  const [card, setCard] = useState([]);
  // api sort파라미터 값 넣어주는 state
  const [sort, setSort] = useState("name");
  // api offset파라미터 offset=0이면 0번부터 시작하는 state
  const [offset, setOffset] = useState(0);
  // api limit파라미터 받아오는 아이템 개수 state
  const [limit, setLimit] = useState(getLimit());
  // api 호출하고 받은 아이템 전체 개수 확인 state
  const [totalCount, setTotalCount] = useState(0);

  const changeSortButton = sortChoice => {
    setSort(sortChoice);
    setOffset(0);
  };
  let allItemsCount = [];
  for (let i = 1; i <= Math.ceil(totalCount / limit); i++) {
    allItemsCount.push(i);
  }
  useEffect(() => {
    const handleCardItemLoad = async () => {
      let result = await getCard({ sort, offset, limit });
      console.log(result);
      setCard(result.results);
      setTotalCount(result.count);
    };
    const handleResize = () => {
      setLimit(getLimit());
    };

    // 화면 크기 변경할 때마다 pageSize를 다시 계산해 넣음
    window.addEventListener("resize", handleResize);
    handleCardItemLoad();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sort, offset, limit]);

  const next = () => {
    if (Math.ceil(totalCount / limit) === offset + 1) return;
    setOffset(offset + 1);
  };

  const prev = () => {
    if (offset === 0) return;
    setOffset(offset - 1);
  };

  return (
    <Container>
      <TopArea>
        <Link to="/">
          <OpenLogoPic />
        </Link>
        <QuestionButtonTop text="답변하러 가기" />
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
        {allItemsCount.map(item => {
          return (
            <div
              key={item}
              className={`paginationButton ${
                offset === item - 1 ? "active" : ""
              }`}
              onClick={() => setOffset(item - 1)}
            >
              {item}
            </div>
          );
        })}
        <NextPageBtn onClick={next} />
      </PaginationArea>
    </Container>
  );
}

export default QuestionUserPage;
