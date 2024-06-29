import { Table } from '@radix-ui/themes';

type TableProps = {
  header: string[];
  size?: "1" | "2" | "3" | undefined;
  children: React.ReactNode;
};

const DataTable = ({ header, size = "3", children }: TableProps) => {
  return (
    <Table.Root size={size}>
      <Table.Header>
        <Table.Row>
          {header.map((item) => (
            <Table.ColumnHeaderCell key={item}>{item}</Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {children}
      </Table.Body>
    </Table.Root >
  );
};

export default DataTable;