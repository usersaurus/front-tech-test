import { beforeAll, describe, expect, it } from 'vitest';
import { useSWStore } from '@/store';
import { planets } from '@/testing/mocks/planets';
import { renderHook, act } from '@testing-library/react';
import { usePlanets } from '../usePlanets';

describe('usePlanet', () => {
  beforeAll(() => {
    useSWStore.setState({ planets: planets, fetched: false });
  });

  it('should add planets with the correct id', () => {
    const { result } = renderHook(() => usePlanets());
    const expectedId = btoa(Date.now().toString());

    act(() => {
      result.current.addPlanet({
        name: 'test planet',
        diameter: 10465,
        climates: ['arid'],
        population: 200000,
        terrains: ['desert']
      });
    });

    expect(result.current.planets).toEqual([
      ...planets,
      {
        name: 'test planet',
        diameter: 10465,
        climates: ['arid'],
        population: 200000,
        terrains: ['desert'],
        id: expectedId
      }
    ]);
  });
});