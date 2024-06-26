import React from 'react';
import { Resident } from '@/features/residents/types/resident';

interface ResidentListProps {
  residents: Resident[];
}

const ResidentList: React.FC<ResidentListProps> = ({ residents }) => {
  return (
    <div>
      <ul>
        {residents.map((resident) => (
          <li key={resident.id}>
            {resident.name} - {resident.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResidentList;