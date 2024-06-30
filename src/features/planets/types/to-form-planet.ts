import { Planet } from "@/types/planet";

export type ToFormPlanet = Omit<Planet, 'id' | 'climates' | 'terrains'> & {
  climates: string;
  terrains: string;
};