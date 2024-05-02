import React, { useState } from "react";
import "./DropdownMenu.css";
import ArrowDown from "../../assets/icons/arrow_down.svg?react";
import ArrowUp from "../../assets/icons/arrow_up.svg?react";

function DropdownMenu() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [sortText, setSortText] = useState("이름순");

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="sortButtonWrapper">
      <button className="sortDropdownTriggerButton" onClick={toggleDropdown}>
        <div className="sortDropdownToggle">
          {sortText}
          {isDropdownVisible ? <ArrowUp /> : <ArrowDown />}
        </div>
      </button>

      {isDropdownVisible && (
        <div className="dropdownMenu">
          <div
            className="dropdownItem"
            onClick={() => {
              setIsDropdownVisible(false);
              setSortText("이름순");
            }}
          >
            이름순
          </div>
          <div
            className="dropdownItem"
            onClick={() => {
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
