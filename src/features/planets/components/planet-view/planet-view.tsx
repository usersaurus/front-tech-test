import { Planet } from '@/types/planet';
import React from 'react';

interface PlanetViewProps {
  planet: Planet;
}

const PlanetView: React.FC<PlanetViewProps> = ({
  planet: { name, climates, diameter, id, population, terrains }
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{climates}</p>
      <p>{diameter}</p>
      <p>{id}</p>
      <p>{population}</p>
      <p>{terrains}</p>
    </div>
  );
};

export default PlanetView;