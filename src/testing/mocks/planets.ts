import { Planet } from "@/types/planet";

const earth: Planet = {
  id: '1',
  name: 'Earth',
  diameter: 10465,
  climates: ['temperate'],
  terrains: ['grasslands', 'mountains'],
  population: 2000000000,
};

const planets: Planet[] = [
  {
    id: '1',
    name: 'Earth',
    diameter: 10465,
    climates: ['temperate'],
    terrains: ['grasslands', 'mountains'],
    population: 2000000000,
  },
  {
    id: '2',
    name: 'Tatooine',
    diameter: 10465,
    climates: ['arid'],
    terrains: ['desert'],
    population: 2000000,
  },
  {
    id: '3',
    name: 'Naboo',
    diameter: 12120,
    climates: ['temperate'],
    terrains: ['grassy hills', 'swamps', 'forests', 'mountains'],
    population: 4500000000,
  },
  {
    id: '4',
    name: 'Hoth',
    diameter: 7200,
    climates: ['frozen'],
    terrains: ['tundra', 'ice caves', 'mountain ranges'],
    population: 0,
  }
];

export {
  planets,
  earth
};