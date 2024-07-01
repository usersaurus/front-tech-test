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

  it('should update planet', () => {
    const firstPlanet = planets[0];
    const updatedFirstPlanet = { ...firstPlanet, name: 'Updated Name' };

    useSWStore.getState().setPlanets(planets);
    useSWStore.getState().updatePlanet(updatedFirstPlanet);

    expect(useSWStore.getState().planets[0]).toEqual(updatedFirstPlanet);
  });

  it('should get planet by id', () => {
    useSWStore.getState().setPlanets(planets);

    expect(useSWStore.getState().getPlanetById('1')).toEqual(planets[0]);
  });

  it('should get paginated planets', () => {
    useSWStore.getState().setPlanets(planets);

    expect(useSWStore.getState().getPaginatedPlanets(1, 2)).toEqual({
      planets: [planets[0], planets[1]],
      total: 2
    });
  });

  it('should set last requested page', () => {
    useSWStore.getState().setLastRequestedPage(2);

    expect(useSWStore.getState().lastRequestedPage).toBe(2);
  });
});