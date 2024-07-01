import GET_PLANETS, { GetPlanetsData } from '@/graphql/queries/get-planets';
import client from '@/lib/apollo-client';
import { Planet } from '@/types/planet';
import { create } from 'zustand';

interface SWState {
  planets: Planet[]
  fetched: boolean,
  lastRequestedPage: number,
  setLastRequestedPage: (page: number) => void
  getPaginatedPlanets: (page: number, limit: number) => { planets: Planet[], total: number }
  getPlanetById: (id: string) => Planet | undefined
  setPlanets: (planets: Planet[]) => void
  deletePlanet: (planet: Planet) => void
  addPlanet: (planet: Planet) => void,
  updatePlanet: (planet: Planet) => void
}

export const useSWStore = create<SWState>()((set, get) => ({
  planets: [],
  fetched: false,
  lastRequestedPage: 1,
  setLastRequestedPage: (page: number) => set({ lastRequestedPage: page }),
  getPaginatedPlanets: (page, limit) => {
    const start = (page - 1) * limit;
    const end = start + limit;

    return {
      planets: get().planets.slice(start, end),
      total: Math.ceil(get().planets.length / limit)
    };
  },
  getPlanetById: (id: string) => get().planets.find(p => p.id === id),
  setPlanets: planets => set({ planets }),
  deletePlanet: planet => set(state => ({ planets: state.planets.filter(p => p.id !== planet.id) })),
  addPlanet: planet => set(state => ({ planets: [...state.planets, planet] })),
  updatePlanet: planet => set(state => ({
    planets: state.planets.map(p => p.id === planet.id ? { ...p, ...planet } : p)
  })),
}));

export const setupStore = async () => {
  const queryResult = await client.query<GetPlanetsData>({
    query: GET_PLANETS
  });

  useSWStore.setState({ fetched: true });
  useSWStore.setState({ planets: queryResult.data.allPlanets.planets });
};
