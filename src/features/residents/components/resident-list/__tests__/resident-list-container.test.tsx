import { describe, it, beforeAll, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Resident } from '@/features/residents/types/resident';
import ResidentListContainer from '../resident-list-container';

const residents = [
  {
    id: '1',
    name: 'Luke Skywalker',
    gender: 'male'
  },
  {
    id: '2',
    name: 'Obi Wan Kenobi',
    gender: 'male'
  },
  {
    id: '3',
    name: 'Leia Organa',
    gender: "female"
  }
] as Resident[];

vi.mock('@/features/residents/hooks/useResidents', () => ({
  useResidents: () => ({
    residents,
    loading: false
  })
}));

describe('Resident list container', () => {
  beforeAll(() => {
    render(<ResidentListContainer planetId='1' />);
  });

  it('should render the resident list', () => {
    residents.forEach(resident => {
      expect(screen.getByText(resident.name)).toBeInTheDocument();
    });
  });
});