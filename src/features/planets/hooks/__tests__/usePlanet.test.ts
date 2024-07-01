import { beforeAll, describe, expect, it, vi } from 'vitest';
import { useSWStore } from '@/store';
import { planets } from '@/testing/mocks/planets';
import { renderHook, act } from '@testing-library/react';
import { usePlanets } from '../usePlanets';
import { idGenerator } from '@/utils/id-generator';
import { ToFormPlanet } from '../../types/to-form-planet';

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

  it('should update planet doing the correct transformation', () => {
    const { result } = renderHook(() => usePlanets());

    const firstPlanet = planets[0];
    const updatedFirstPlanet = {
      ...firstPlanet,
      name: 'Updated Name',
      climates: 'windy, arid',
      terrains: 'desert, forest'
    } as ToFormPlanet;

    const expectedPlanets = {
      ...firstPlanet,
      name: 'Updated Name',
      climates: ['windy', 'arid'],
      terrains: ['desert', 'forest']
    };

    act(() => {
      result.current.updatePlanet(updatedFirstPlanet, firstPlanet.id);
    });

    expect(result.current.planets[0]).toEqual(expectedPlanets);
  });
});