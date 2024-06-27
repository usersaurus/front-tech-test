import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useSWStore } from '..';
import { planets, earth } from '@/testing/mocks/planets';

describe('store', () => {
  beforeEach(() => {
    useSWStore.setState({ planets: [], fetched: false });
  });

  afterEach(() => {
    useSWStore.setState({ planets: [], fetched: false });
  });

  it('should set planets', () => {
    useSWStore.getState().setPlanets(planets);

    expect(useSWStore.getState().planets).toEqual(planets);
  });

  it('should delete planet', () => {
    const firstPlanet = planets[0];

    useSWStore.getState().setPlanets(planets);
    useSWStore.getState().deletePlanet(firstPlanet);

    expect(useSWStore.getState().planets).toEqual(planets.slice(1));
  });

  it('should add planet', () => {
    useSWStore.getState().addPlanet(earth);

    expect(useSWStore.getState().planets).toEqual([earth]);
  });
});