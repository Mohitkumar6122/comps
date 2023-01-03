import React from "react";
import Dropdown from "./components/Dropdown";
function App() {
  const options = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "green",
    },
    {
      label: "A Shade of Blue",
      value: "blue",
    },
    {
      label: "A Shade of Pink",
      value: "pink",
    },
  ];

  return (
    <div>
      <Dropdown options = {options} />
    </div>
  );
}

export default App;
