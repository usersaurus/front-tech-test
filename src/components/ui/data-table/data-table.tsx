import { Table } from '@radix-ui/themes';

type TableProps = {
  header: string[];
  children: React.ReactNode;
};

const DataTable = ({ header, children }: TableProps) => {
  return (
    <Table.Root>
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