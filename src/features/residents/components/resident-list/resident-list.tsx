import { Resident } from '@/features/residents/types/resident';
import DataTable from '@/components/ui/data-table/data-table';
import ResidentRow from './resident-row';
import { residentKeys } from '../../utils/residentKeys';
import { Flex, Heading } from '@radix-ui/themes';

interface ResidentListProps {
  residents: Resident[];
}


const ResidentList = ({ residents }: ResidentListProps) => {
  if (!residents.length) {
    return <p>No residents found</p>;
  }

  return (
    <Flex direction="column">
      <Heading size="4" mb="4">Residents</Heading>
      <DataTable header={residentKeys} size="1">
        {residents.map((resident) => (
          <ResidentRow key={resident.id} resident={resident} />
        ))}
      </DataTable>
    </Flex>
  );
};

export default ResidentList;