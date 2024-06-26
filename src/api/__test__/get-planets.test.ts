import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import { api } from '@/lib/api-client';
import getAllPlanets from '../get-planets';
import { Planet } from '@/types/planet';

// Mock the api module
vi.mock('@/lib/api-client', () => ({
    api: {
        get: vi.fn(),
    },
}));

describe('getAllPlanets', () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it('fetches all planets across multiple pages', async () => {
        (api.get as Mock).mockResolvedValueOnce({
            data: {
                results: [{ name: 'Coruscant' }] as Planet[],
                next: '/planets?page=2',
            },
        }).mockResolvedValueOnce({
            data: {
                results: [{ name: 'Tatooine' }] as Planet[],
                next: '/planets?page=3',
            },
        }).mockResolvedValueOnce({
            data: {
                results: [{ name: 'Endor' }] as Planet[],
                next: null,
            },
        });

        const planets = await getAllPlanets();

        expect(api.get).toHaveBeenCalledTimes(3);
        expect(api.get).toHaveBeenCalledWith('/planets', {});
        expect(api.get).toHaveBeenCalledWith('/planets?page=2', { baseURL: '' });
        expect(api.get).toHaveBeenCalledWith('/planets?page=3', { baseURL: '' });
        expect(api.get).not.toHaveBeenCalledWith('/planets?page=4', { baseURL: '' });

        expect(planets).toEqual([
            { name: 'Coruscant' },
            { name: 'Tatooine' },
            { name: 'Endor' },
        ]);
    });
});