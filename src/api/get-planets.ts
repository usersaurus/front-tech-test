import { api } from '@/lib/api-client';
import { Planet } from '@/types/planet';
import { AxiosRequestConfig } from 'axios';

interface GetPlanetsResponse {
    results: Planet[];
    next: string | null;
}

const getAllPlanets = async (url = '/planets', options: AxiosRequestConfig = {}): Promise<Planet[]> => {
    const response = await api.get<GetPlanetsResponse>(url, options)
    const { results, next } = response.data;

    if (next) {
        const nextPageResults = await getAllPlanets(next, { baseURL: '' });

        return results.concat(nextPageResults);
    }

    return results;
}

export default getAllPlanets;