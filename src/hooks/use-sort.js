import { useState } from "react";

function useSort(data, config) {
  // 2 pieces of state
  // 1 -> keep track of sort order (sortOrder)
  const [sortOrder, setSortOrder] = useState(null);

  // 2 -> keep track of column which is used for sorting (sortBy)
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    if (sortBy && sortBy !== label) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    switch (sortOrder) {
      case null:
        setSortOrder("asc");
        setSortBy(label);
        break;
      case "asc":
        setSortOrder("desc");
        setSortBy(label);
        break;
      case "desc":
        setSortOrder(null);
        setSortBy(null);
        break;
      default:
        break;
    }
  };

  //! Sorting is mutable
  // Only sort data is sortOrder and sortBy are not null
  // Make a copy of 'data' prop as we should not mutate original prop
  // find correct 'sortValue' function and use it for sorting (As this is important for sorting)

  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      // reverse order for reverse sorting
      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      // compare for strings
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      }
      // compare for integer value
      else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return { sortOrder, sortBy, setSortColumn, sortedData };
}

export default useSort;
