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
        {planets.map(planet => (
          <li key={planet.id}>
            <h3>{planet.name}</h3>
            <p>Id: {planet.id}</p>
            <p>Diameter: {planet.diameter} km</p>
            <p>Climates: {planet.climates}</p>
            <p>Population: {planet.population || 0}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetList;