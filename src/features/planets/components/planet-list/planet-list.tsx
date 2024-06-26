import { Planet } from '@/types/planet';
import React from 'react';

interface PlanetListProps {
  planets: Planet[];
}

const PlanetList: React.FC<PlanetListProps> = ({ planets }) => {
  return (
    <div>
      <h2>Planet List</h2>
      <ul>
        {planets.map((planet, index) => (
          <li key={index}>
            <h3>{planet.name}</h3>
            <p>Diameter: {planet.diameter}</p>
            <p>Climates: {planet.climates}</p>
            <p>Population: {planet.population}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetList;