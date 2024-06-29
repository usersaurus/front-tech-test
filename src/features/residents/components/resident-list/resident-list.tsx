import { Resident } from '@/features/residents/types/resident';
import DataTable from '@/components/ui/data-table/data-table';
import ResidentRow from './resident-row';
import { residentKeys } from '../../utils/residentKeys';

interface ResidentListProps {
  residents: Resident[];
}


const ResidentList = ({ residents }: ResidentListProps) => {
  return (
    <DataTable header={residentKeys}>
      {residents.map((resident) => (
        <ResidentRow key={resident.id} resident={resident} />
      ))}
    </DataTable>
  );
};

export default ResidentList;