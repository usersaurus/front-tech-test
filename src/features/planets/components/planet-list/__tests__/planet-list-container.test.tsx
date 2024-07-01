import { render, screen } from '@testing-library/react';
import { describe, it, beforeAll, expect } from 'vitest';
import PlanetListContainer from '../planet-list-container';
import { useSWStore } from '@/store';
import { planets } from '@/testing/mocks/planets';

describe('PlanetListContainer', () => {
  beforeAll(() => {
    useSWStore.getState().setPlanets(planets);
    render(<PlanetListContainer />);
  });

  it('should render planet title', () => {
    expect(screen.getByRole('heading', { name: 'Planets' })).toBeInTheDocument();
  });

  it('should render planet list', () => {
    planets.forEach(planet => {
      expect(screen.getByText(planet.name)).toBeInTheDocument();
    });
  });

  it('should show the paginator', () => {
    expect(screen.getByRole('button', { name: 'next button' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'previous button' })).toBeInTheDocument();
    expect(screen.getByLabelText('current page')).toBeInTheDocument();
  });
});
