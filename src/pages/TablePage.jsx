import SortableTable from "../components/SortableTable";
import { useState } from "react";

const initialData = [
  { id: 1, fruit: "pineapple", color: "red", score: 15 },
  { id: 2, fruit: "apple", color: "green", score: 13 },
  { id: 3, fruit: "litchee", color: "yellow", score: 16 },
];

const config = [
  {
    label: "fruits",
    render: (item) => item.fruit,
    isSortable: true,
  },
  {
    label: "color",
    render: (item) => item.color,
    getSortValue: (item) => item.color,
  },
  {
    label: "score",
    render: (item) => item.score,
    getSortValue: (item) => item.score,
  },
  {
    label: "score squared",
    render: (item) => item.score ** 2,
  },
];

// Kun column corresponds to which config object.
// We dont know how should we sort a column. A column sorting might depend upon some calcualtion that might involve another column.

function TablePage() {
  const [data, setData] = useState(initialData);
  // const [sortedColumn, setSortedColumn] = useState({"columnId": 0, state: "ascending"})

  // function sortDataByColumn(columnId) {
  //     const ColumnDatatype = typeof(data.rows[0][columnId - 1])
  //     let sorted_rows = data.rows.slice();

  //     if (sortedColumn.columnId === columnId) {
  //         if (sortedColumn.state === "ascending") {
  //             // Sort it in descending order
  //             if (ColumnDatatype === "string") {
  //                 sorted_rows.sort((a, b) => b[columnId - 1].localeCompare(a[columnId - 1]))
  //             } else if (ColumnDatatype === "number") {
  //                 sorted_rows.sort((a, b) => b[columnId - 1] - a[columnId - 1]);
  //             }

  //             setSortedColumn({...sortedColumn, state: "descending"})
  //             setData({...data, rows: sorted_rows});

  //         } else {
  //             // It is in descending order. Remove sorting or sort by a default Column.
  //             setSortedColumn({...sortedColumn, columnId: 0, state: "ascending"})
  //         }

  //     } else {
  //          // Sort it in ascending order.
  //          if (ColumnDatatype === "string") {
  //             sorted_rows.sort((a, b) => a[columnId - 1].localeCompare(b[columnId - 1]))
  //         } else if (ColumnDatatype === "number") {
  //             sorted_rows.sort((a, b) => a[columnId - 1] - b[columnId - 1]);
  //         }

  //         setData({...data, rows: sorted_rows});
  //         setSortedColumn({...sortedColumn, columnId: columnId, state: "ascending"})

  //     }
  // }

  const sortData = (columnData) => {
    let sortOrder = columnData.currentlySortedOrder === "ascending" ? -1 : 1;
    const sortedData = data.slice();

    sortedData.sort((a, b) => {
      const valueA = columnData.getSortValue(a);
      const valueB = columnData.getSortValue(b);

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * sortOrder;
      } else if (typeof valueA === "number") {
        return (valueA - valueB) * sortOrder;
      }
    });

    setData(sortedData);
    // set the new sorted order.
    columnData.currentlySortedOrder =
      sortOrder === 1 ? "ascending" : "descending";
  };

  return <SortableTable data={data} config={config} onSort={sortData} />;
}

export default TablePage;
