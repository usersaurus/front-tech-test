import ResidentList from './resident-list';
import { useResidents } from '../../hooks/useResidents';
import { Planet } from '@/types/planet';
import { Box, Skeleton } from '@radix-ui/themes';

interface ResidentListContainerProps {
  planetId: Planet['id'];
}

const ResidentListContainer = ({ planetId }: ResidentListContainerProps) => {
  const { residents = [], loading, error } = useResidents(planetId);

  if (error) return <p>No residents found</p>;

  return (
    <Skeleton loading={loading}>
      <Box>
        <ResidentList residents={residents} />
      </Box>
    </Skeleton>
  );
};

export default ResidentListContainer;