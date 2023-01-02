import React from "react";
import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "adasd",
      label: "What is React?",
      content: "Front end JS Framework",
    },
    {
      id: "adasfdgd",
      label: "Why use React?",
      content: "Favourite Front end JS Framework among developers",
    },
    {
      id: "adasasdd",
      label: "How do you use?",
      content: "Use React by creating components ",
    },
    {
      id: "adasdasd",
      label: "Is redux neccessary for react?",
      content:
        "redux acts as a global store for react apps but it is not neccessary ",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
