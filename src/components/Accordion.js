import React, { useState, useRef, useEffect } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
const Accordion = ({ items }) => {
  // defaulting it to -1 in the accordion
  const [expandedItem, setExpandedItem] = useState(-1);

  useEffect(() => {
    const outsideDropdownClick = (event) => {
      !ref.current.contains(event.target) && setExpandedItem(-1);
    };
    document.body.addEventListener("click", outsideDropdownClick, {
      capture: true,
    });

    return () => {
      document.body.removeEventListener("click", outsideDropdownClick, {
        capture: true,
      });
    };
  }, []);

  //event handler outside map function to make visibility clear
  const handleClick = (index) => {
    index === expandedItem ? setExpandedItem(-1) : setExpandedItem(index);
  };
  const ref = useRef();
  const renderedItemList = items?.map((item, index) => {
    const isSelected = index === expandedItem;
    const icon = (
      <span> {isSelected ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div key={item.id}>
        <div
          onClick={() => {
            handleClick(index);
          }}
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
        >
          {item.label}
          {icon}
        </div>
        {isSelected && <div className="border-b p-5">{item.content}</div>}
        <br />
      </div>
    );
  });
  return (
    <div className="border-x border-t rounded" ref={ref}>
      {renderedItemList}
    </div>
  );
};

export default Accordion;
