import { useSWStore } from '@/store';
import { Planet } from '@/types/planet';
import { idGenerator } from '@/utils/id-generator';

export const usePlanets = () => {
  const planets = useSWStore(state => state.planets);
  const fetched = useSWStore(state => state.fetched);
  const setPlanets = useSWStore(state => state.setPlanets);
  const deletePlanet = useSWStore(state => state.deletePlanet);
  const addPlanet = useSWStore(state => state.addPlanet);

  const setupAddPlanet = (planet: Omit<Planet, 'id'>) => {
    const id = idGenerator();

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