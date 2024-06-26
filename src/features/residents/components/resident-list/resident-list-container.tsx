import React from 'react';
import ResidentList from './resident-list';
import { useResidents } from '../../hooks/useResidents';

interface ResidentListContainerProps {
  planetId: string;
}

const ResidentListContainer: React.FC<ResidentListContainerProps> = ({ planetId }) => {
  const { residents = [], loading, error } = useResidents(planetId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h2>Resident List</h2>
      <ResidentList residents={residents} />
    </div>
  );
};

export default ResidentListContainer;