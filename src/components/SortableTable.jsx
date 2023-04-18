// State: This file defines 2 states, sortOrder and SortBy.
// Click handlers: Then we define a function (handleClick) that runs whenever user clicks on a column that is Sortable.
// Update Column Configuration: If the column is sortable, then we specify a new propery, some new styling and also add event handler.
// Sorting Logic: We then sort the table. We use state to determine how to sort the table.
// JSX : We return Table component.

import Table from "./Table";
import useSort from "../hooks/useSort";
import { FaSortDown, FaSortUp } from "react-icons/fa";

function SortableTable(props) {
  const { data, config } = props;

  const { sortedData, sortBy, sortOrder, setSortColumn } = useSort(
    data,
    config
  );

  const modifiedConfig = config.map((column) => {
    if (!column.getSortValue) {
      return column;
    }

    const header = (
      <th
        onClick={() => setSortColumn(column.label)}
        className="px-4 py-2 cursor-pointer border-2 border-black hover:bg-gray-200"
      >
        <div className="flex items-center gap-1">
          {column.label}
          {getSortIcon(column.label, sortBy, sortOrder)}
        </div>
      </th>
    );

    return { ...column, header };
  });

  return <Table {...props} config={modifiedConfig} data={sortedData} />;
}

function getSortIcon(label, sortBy, sortOrder) {
  if (sortBy != label) {
    return (
      <div className="relative">
        <FaSortUp />
        <FaSortDown className="absolute bottom-0 left-0" />
      </div>
    );
  }

  return sortOrder === "ascending" ? (
    <FaSortUp className="inline" />
  ) : (
    <FaSortDown className="inline" />
  );
}

export default SortableTable;
