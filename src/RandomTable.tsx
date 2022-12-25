import { Component, For, splitProps } from "solid-js";

export interface RollableTableRow {
  minRoll: number;
  maxRoll: number;
  text: string;
}

export interface RollableTable {
  name: string;
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
        <For each={table.rows}>
          {(row) => <li>{rollText(row)}: {row.text}</li>}
        </For>
      </ul>
    </>
  );
};

export default RandomTable;
