import { useSWStore } from '@/store';
import { Planet } from '@/types/planet';
import { idGenerator } from '@/utils/id-generator';
import { ToFormPlanet } from '../types/to-form-planet';

export const usePlanets = () => {
  const planets = useSWStore(state => state.planets);
  const fetched = useSWStore(state => state.fetched);
  const lastRequestedPage = useSWStore(state => state.lastRequestedPage);
  const getPaginatedPlanets = useSWStore(state => state.getPaginatedPlanets);
  const setPlanets = useSWStore(state => state.setPlanets);
  const deletePlanet = useSWStore(state => state.deletePlanet);
  const addPlanet = useSWStore(state => state.addPlanet);
  const getPlanetById = useSWStore(state => state.getPlanetById);
  const updatePlanet = useSWStore(state => state.updatePlanet);
  const setLastRequestedPage = useSWStore(state => state.setLastRequestedPage);

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

  const setupAddPlanet = (data: ToFormPlanet) => {
    const planet = {
      name: data.name,
      diameter: data.diameter,
      climates: data.climates.split(',').map(c => c.trim()),
      terrains: data.terrains.split(',').map(t => t.trim()),
      population: data.population,
      id: idGenerator()
    } as Planet;

    addPlanet(planet);
  };

  return {
    planets,
    fetched,
    lastRequestedPage,
    setLastRequestedPage,
    getPaginatedPlanets,
    getPlanetById,
    setPlanets,
    deletePlanet,
    addPlanet: setupAddPlanet,
    updatePlanet: setupUpdatePlanet
  };
};