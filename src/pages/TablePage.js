import React from "react";
import SortableTable from "../components/SortableTable";

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
    label: "Name",
    render: (fruit) => fruit.name,
    sortValue : (fruit) => fruit.name, 
  },
  {
    label: "Color",
    render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
  },
  {
    label: "Score",
    render: (fruit) => fruit.score,
    // optional property for label use {header: prop}
    // header: () => <th className="bg-red-500">Score</th>,

    // optional fxn to describe how to extract values for sorting when the 
    // column is clicked use sortValue: { prop }
    sortValue: (fruit) => fruit.score,
  },
];

// generates the key for rows in table
// handling given to developer using table
const keyFn = (fruit) => {
  // here fruit.name is being used as key
  return fruit.name;
};

function TablePage() {
  return (
    <div>
      <SortableTable data={data} config={dataConfig} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
