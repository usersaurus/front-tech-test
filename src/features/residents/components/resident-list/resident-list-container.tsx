import ResidentList from './resident-list';
import { useResidents } from '../../hooks/useResidents';
import { Planet } from '@/types/planet';

interface ResidentListContainerProps {
  planetId: Planet['id'];
}

const ResidentListContainer = ({ planetId }: ResidentListContainerProps) => {
  const { residents = [], loading, error } = useResidents(planetId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <ResidentList residents={residents} />
  );
};

export default ResidentListContainer;