import React, { useState } from "react";
import styled, { css } from "styled-components";
import ArrowDown from "@assets/icons/arrow_down_silver.svg?react";
import ArrowUp from "@assets/icons/arrow_up_black.svg?react";

const SortButtonWrapper = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SortDropdownTriggerButton = styled.button`
  width: 80px;
  height: 34px;
  background-color: #ffffff;
  border: 1px solid #818181;
  border-radius: 8px;
  padding: 8px 6px 8px 8px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  font-weight: 500;
  line-height: 18px;

  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid black;
    `}
`;

const SortDropdownToggle = styled.div`
  color: #818181;
  display: flex;
  gap: 4px;
  text-align: center;
  align-items: center;

  ${({ isActive }) =>
    isActive &&
    css`
      color: #000000;
    `}
`;

const DropdownMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 234px;
  width: 80px;
  height: 68px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  box-shadow: 0 2px 4px #8c8c8c40;
  z-index: 99;

  @media (max-width: 676px) {
    top: 240px;
  }
`;

const DropdownMenuItem = styled.div`
  line-height: 18px;
  text-align: left;
  padding: 6px 16px;
  cursor: pointer;
  color: #515151;

  &:hover {
    color: #1877f2;
  }
`;

function DropdownMenu({ onChangeSort }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [sortText, setSortText] = useState("이름순");

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <SortButtonWrapper>
      <SortDropdownTriggerButton
        isActive={isDropdownVisible}
        onClick={toggleDropdown}
      >
        <SortDropdownToggle isActive={isDropdownVisible}>
          {sortText}
          {isDropdownVisible ? <ArrowUp /> : <ArrowDown />}
        </SortDropdownToggle>
      </SortDropdownTriggerButton>
      {isDropdownVisible && (
        <DropdownMenuContainer>
          <DropdownMenuItem
            onClick={() => {
              onChangeSort("name");
              setIsDropdownVisible(false);
              setSortText("이름순");
            }}
          >
            이름순
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              onChangeSort("date");
              setIsDropdownVisible(false);
              setSortText("최신순");
            }}
          >
            최신순
          </DropdownMenuItem>
        </DropdownMenuContainer>
      )}
    </SortButtonWrapper>
  );
}

export default DropdownMenu;
