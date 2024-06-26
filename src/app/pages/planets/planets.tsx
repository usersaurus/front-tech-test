import SWStore from '@/store';

export const PlanetsRoute = () => {
  const planets = SWStore(state => state.planets);

  return (
    <>
      {planets.map(planet => (
        <div key={planet.name}>
          <h2>{planet.name}</h2>
          <p>Diameter: {planet.diameter}</p>
          <p>Climate: {planet.climates.join(', ')}</p>
          <p>Terrain: {planet.terrains.join(', ')}</p>
          <p>Population: {planet.population}</p>
        </div>
      ))}
    </>
  )
};