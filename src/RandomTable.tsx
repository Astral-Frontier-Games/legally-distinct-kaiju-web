import { Component, splitProps } from "solid-js";

export interface RollableTableRow {
  minRoll: number;
  maxRoll: number;
  text: string;
}

export interface RollableTable {
  rows: RollableTableRow[];
}

const rollText = (row: RollableTableRow) => {
  return row.minRoll === row.maxRoll
    ? row.minRoll
    : `${row.minRoll}-${row.maxRoll}`;
};

const RandomTable: Component<{ table: RollableTable }> = (props) => {
  const table: RollableTable = props.table;

  return (
    <>
      <ul style={{ "list-style-type": "none" }}>
        {table.rows.map((row) => (
          <>
            <li>{rollText(row)}: {row.text}</li>
          </>
        ))}
      </ul>
    </>
  );
};

export default RandomTable;
