import React from "react";
import Table from "../components/Table";

const data = [
  { name: "Orange", color: "bg-orange-500", score: 5 },
  { name: "Apple", color: "bg-red-500", score: 7 },
  { name: "Banana", color: "bg-yellow-500", score: 4 },
  { name: "Lime", color: "bg-green-500", score: 2 },
];

// config file for column data for the table
// makes it resuable and applies composition concept
const dataConfig = [
  {
    label: "Fruit",
    render: (fruit) => fruit.name,
  },
  {
    label: "Color",
    render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
  },
  {
    label: "Score",
    render: (fruit) => fruit.score,
    sort: (a, b) => {
      return a - b;
    },
  },
];

// generated the kew for rows in table
// handling given to developer using table
const keyFn = (fruit) => {
  // here fruit.name is being used as key
  return fruit.name;
};
function TablePage() {
  return (
    <div>
      <Table data={data} config={dataConfig} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
