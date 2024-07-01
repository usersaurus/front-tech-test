import { beforeAll, describe, expect, it, vi } from 'vitest';
import { useSWStore } from '@/store';
import { planets } from '@/testing/mocks/planets';
import { renderHook, act } from '@testing-library/react';
import { usePlanets } from '../usePlanets';
import { idGenerator } from '@/utils/id-generator';

describe('usePlanet', () => {
  beforeAll(() => {
    useSWStore.setState({ planets: planets, fetched: false });
  });

  vi.mock('@/utils/id-generator', () => ({
    idGenerator: () => '123'
  }));

  it('should add planets with the correct id', () => {
    const { result } = renderHook(() => usePlanets());
    const expectedId = idGenerator();

    act(() => {
      result.current.addPlanet({
        name: 'test planet',
        diameter: 10465,
        climates: 'arid, windy',
        population: 200000,
        terrains: 'desert'
      });
    });

    expect(result.current.planets).toEqual([
      ...planets,
      {
        name: 'test planet',
        diameter: 10465,
        climates: ['arid', 'windy'],
        population: 200000,
        terrains: ['desert'],
        id: expectedId
      }
    ]);
  });
});