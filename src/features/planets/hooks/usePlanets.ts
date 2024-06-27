import { useSWStore } from '@/store';
import { Planet } from '@/types/planet';

export const usePlanets = () => {
  const planets = useSWStore(state => state.planets);
  const fetched = useSWStore(state => state.fetched);
  const setPlanets = useSWStore(state => state.setPlanets);
  const deletePlanet = useSWStore(state => state.deletePlanet);
  const addPlanet = useSWStore(state => state.addPlanet);

  const setupAddPlanet = (planet: Omit<Planet, 'id'>) => {
    const id = btoa(Date.now().toString());

    addPlanet({ ...planet, id });
  };

  return {
    planets,
    fetched,
    setPlanets,
    deletePlanet,
    addPlanet: setupAddPlanet
  };
};