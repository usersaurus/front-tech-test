import GET_PLANETS, { GetPlanetsData } from '@/graphql/queries/get-planets';
import client from '@/lib/apollo-client';
import { Planet } from '@/types/planet';
import { create } from 'zustand';

interface SWState {
    planets: Planet[]
    fetched: boolean
    setPlanets: (planets: Planet[]) => void
}

const SWStore = create<SWState>()((set) => ({
    planets: [],
    fetched: false,
    setPlanets: planets => set({ planets })
}))

export const setupStore = async () => {
    const queryResult = await client.query<GetPlanetsData>({
        query: GET_PLANETS
    });

    SWStore.setState({ fetched: true });
    SWStore.setState({ planets: queryResult.data.allPlanets.planets });
}


export default SWStore;