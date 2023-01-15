import React from "react";

function Table({ data, config, keyFn }) {
  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((col) => {
      return (
        <td key={col.label} className="p-2">
          {col.render(rowData)}
        </td>
      );
    });
    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
