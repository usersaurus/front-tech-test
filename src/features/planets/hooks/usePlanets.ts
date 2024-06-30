import { useSWStore } from '@/store';
import { Planet } from '@/types/planet';
import { idGenerator } from '@/utils/id-generator';
import { ToFormPlanet } from '../types/to-form-planet';

export const usePlanets = () => {
  const planets = useSWStore(state => state.planets);
  const fetched = useSWStore(state => state.fetched);
  const setPlanets = useSWStore(state => state.setPlanets);
  const deletePlanet = useSWStore(state => state.deletePlanet);
  const addPlanet = useSWStore(state => state.addPlanet);
  const getPlanetById = useSWStore(state => state.getPlanetById);
  const updatePlanet = useSWStore(state => state.updatePlanet);

  const setupAddPlanet = (planet: Omit<Planet, 'id'>) => {
    const id = idGenerator();

    addPlanet({ ...planet, id });
  };

  const setupUpdatePlanet = (data: ToFormPlanet, id: Planet['id']) => {
    const planet = {
      name: data.name,
      diameter: data.diameter,
      climates: data.climates.split(',').map(c => c.trim()),
      terrains: data.terrains.split(',').map(t => t.trim()),
      population: data.population,
      id
    } as Planet;

    updatePlanet(planet);
  };

  return {
    planets,
    fetched,
    getPlanetById,
    setPlanets,
    deletePlanet,
    addPlanet: setupAddPlanet,
    updatePlanet: setupUpdatePlanet
  };
};