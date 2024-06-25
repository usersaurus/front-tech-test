import { Entity } from '@/types/entity'

export type Planet = Entity<{
    name: string;
    diameter: number;
    climate: string;
    terrain: string;
    population: number;
}>;