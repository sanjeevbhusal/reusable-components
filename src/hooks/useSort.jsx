import { useState } from "react";

function useSort(data, config) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  function handleClick(label) {
    // If the table has already been sorted with column A and user clicks on columnB,
    // then reset the sorting cycle i.e. set order to ascending
    if (sortBy && sortBy != label) {
      setSortOrder("ascending");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("ascending");
      setSortBy(label);
    } else if (sortOrder === "ascending") {
      setSortOrder("descending");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  }

  let sortedData = data;

  // Sort the table if both sortBy and sortOrder is present.
  if (sortBy && sortOrder) {
    const { getSortValue } = config.find((column) => column.label === sortBy);

    const sortOrderValue = sortOrder === "ascending" ? 1 : -1;
    sortedData = [...data];

    sortedData.sort((a, b) => {
      const valueA = getSortValue(a);
      const valueB = getSortValue(b);

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * sortOrderValue;
      }

      return (valueA - valueB) * sortOrderValue;
    });
  }

  return {
    sortBy,
    sortOrder,
    handleClick,
    sortedData,
  };
}

export default useSort;
