import { Planet } from "@/types/planet";
import { gql } from "@apollo/client";

export type GetPlanetsData = {
  allPlanets: {
    planets: Planet[];
  };
};

const GET_PLANETS = gql`
  query AllPlanetsQuery {
    allPlanets {
      planets {
        name
        diameter
        climates
        terrains
        population
      }
    }
}`;

export default GET_PLANETS;