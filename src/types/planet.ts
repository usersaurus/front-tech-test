import { Entity } from '@/types/entity';

export type Planet = Entity<{
    name: string;
    diameter: number;
    climates: string[];
    terrains: string[];
    population: number;
}>;