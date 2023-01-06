import React, { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const outsideBodyClick = (event) => {
      if (!ref.current) return;
      !ref.current.contains(event.target) && setIsOpen(false);
    }
    document.addEventListener('click', outsideBodyClick, true)
    
    return () => {
      document.removeEventListener("click", outsideBodyClick, true);
    }
  }, [])
  
  const handleClick = () => {
    // setIsOpen(!isOpen);
    //Alias for the above statement
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };
  const renderedOptions = options?.map((option) => {
    return option?.value !== value?.value ? (
      <div
        onClick={() => {
          handleOptionClick(option);
        }}
        key={option.value}
        className="hover:bg-sky-100 rounded cursor pointer"
      >
        <div>{option.label}</div>
        <br />
      </div>
    )
      : null;
    
  });

  return (
    <div ref= {ref} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select ...."}
        <div className="text-lg">
          {isOpen ? <GoChevronLeft /> : <GoChevronDown />}
        </div>
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
};

export default Dropdown;
