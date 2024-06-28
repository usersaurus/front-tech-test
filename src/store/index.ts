import GET_PLANETS, { GetPlanetsData } from '@/graphql/queries/get-planets';
import client from '@/lib/apollo-client';
import { Planet } from '@/types/planet';
import { create } from 'zustand';

interface SWState {
  planets: Planet[]
  fetched: boolean
  setPlanets: (planets: Planet[]) => void
  deletePlanet: (planet: Planet) => void
  addPlanet: (planet: Planet) => void
}

export const useSWStore = create<SWState>()((set) => ({
  planets: [],
  fetched: false,
  setPlanets: planets => set({ planets }),
  deletePlanet: planet => set(state => ({ planets: state.planets.filter(p => p.id !== planet.id) })),
  addPlanet: planet => set(state => ({ planets: [...state.planets, planet] }))
}));

export const setupStore = async () => {
  const queryResult = await client.query<GetPlanetsData>({
    query: GET_PLANETS
  });

  console.log(queryResult.data.allPlanets.planets);

  useSWStore.setState({ fetched: true });
  useSWStore.setState({ planets: queryResult.data.allPlanets.planets });
};
