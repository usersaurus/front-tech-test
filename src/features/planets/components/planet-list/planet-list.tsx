import { Planet } from '@/types/planet';
import React from 'react';
import { usePlanets } from '../../hooks/usePlanets';

interface PlanetListProps {
  planets: Planet[];
}

const PlanetList: React.FC<PlanetListProps> = ({ planets }) => {
  const { deletePlanet } = usePlanets();

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
            <p onClick={() => deletePlanet(planet)}> DELETE PLANET </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetList;