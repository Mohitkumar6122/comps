import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
function App() {
  const [selection, setSelection] = useState(null);
  const handleSelection = (option) => {
    setSelection(option);
  }
  console.log(selection)
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
    <div className="flex">
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
}

export default App;
