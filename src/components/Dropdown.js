import React from "react";

const Dropdown = ({ options }) => {
  const renderedOptions = options?.map((option) => {
    return (
      <div key = {option.value}>
        <div>{option.label}</div>
        <div>{option.value}</div>
        <br />
      </div>
    );
  });
  return <div>{renderedOptions}</div>;
};

export default Dropdown;
