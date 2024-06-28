import { Table } from "@radix-ui/themes";
import React from "react";

type AcceptedDataTypes = string | string[] | number | React.ReactNode;

type DataRowProps = {
  rowHeaderCell: string;
  data: AcceptedDataTypes[];
};

const DataRow = ({ rowHeaderCell, data }: DataRowProps) => {
  return (
    <Table.Row>
      <Table.RowHeaderCell>{rowHeaderCell}</Table.RowHeaderCell>
      {data.map((item, index) => (
        <Table.Cell key={`${rowHeaderCell}-${index}`}>{item}</Table.Cell>
      ))}
    </Table.Row>
  );
};

export default DataRow;