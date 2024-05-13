import React, { useState } from "react";
import "./DropdownMenu.css";
import ArrowDown from "../../assets/icons/arrow_down_silver.svg?react";
import ArrowUp from "../../assets/icons/arrow_up_black.svg?react";

function DropdownMenu({ onChangeSort }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [sortText, setSortText] = useState("이름순");

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="sortButtonWrapper">
      <button className={`sortDropdownTriggerButton ${ isDropdownVisible ? "active" : ""}`} onClick={toggleDropdown}>
        <div className={`sortDropdownToggle ${ isDropdownVisible ? "active" : ""} `}>
          {sortText}
          {isDropdownVisible ? <ArrowUp /> : <ArrowDown />}
        </div>
      </button>

      {isDropdownVisible && (
        <div className="dropdownMenu">
          <div
            className="dropdownItem"
            onClick={() => {
              onChangeSort("name");
              setIsDropdownVisible(false);
              setSortText("이름순");
            }}
          >
            이름순
          </div>
          <div
            className="dropdownItem"
            onClick={() => {
              onChangeSort("date");
              setIsDropdownVisible(false);
              setSortText("최신순");
            }}
          >
            최신순
          </div>
        </div>
      )}
    </div>
  );
}
export default DropdownMenu;
