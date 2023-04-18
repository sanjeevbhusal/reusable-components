import { Fragment } from "react";

function Table({ data, config }) {
  const renderedHeaders = config.map((columnData) => {
    if (columnData.header) {
      return <Fragment key={columnData.label}>{columnData.header}</Fragment>;
    }

    return (
      <th
        key={columnData.label}
        className="px-4 py-2 text-xl border-2 border-black"
      >
        {columnData.label}
      </th>
    );
  });

  const renderedRows = data.map((rowData) => {
    // Each config object determines the value of one column. By looping over all config objects, we get values for all columns.
    const renderedCells = config.map((columnData) => {
      return (
        <td className="px-4 py-2 border-2 border-black" key={columnData.label}>
          {columnData.render(rowData)}
        </td>
      );
    });

    return <tr key={rowData.id}>{renderedCells}</tr>;
  });

  return (
    <table className="table-auto">
      <thead>
        <tr>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
