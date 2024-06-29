import DataRow from "@/components/ui/data-table/data-row";
import { Resident } from "../../types/resident";

type ResidentRowProps = {
  resident: Resident;
};

const ResidentRow = ({ resident }: ResidentRowProps) => {
  const { name, id, ...rest } = resident;

  return (
    <DataRow key={id} rowHeaderCell={name} data={[...Object.values(rest)]} />
  );
};

export default ResidentRow;