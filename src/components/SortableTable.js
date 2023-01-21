import Table from "./Table";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
// added custom hook for sorting logic and reusablilty
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(data, config);
  
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

// function to show sorting icons
const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy || sortOrder === null) {
    return (
      <div>
        {" "}
        <GoChevronUp /> <GoChevronDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoChevronUp />
      </div>
    );
  } else
    return (
      <div>
        <GoChevronDown />
      </div>
    );
};

export default SortableTable;
