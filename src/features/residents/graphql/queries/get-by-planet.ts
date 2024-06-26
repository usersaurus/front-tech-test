import { Resident } from '@/features/residents/types/resident';
import { gql } from "@apollo/client";

export type GetResidentsData = {
  planet: {
    residentConnection: {
      residents: Resident[];
    };
  }
};

const GET_BY_PLANET = gql`
  query ResidentsByPlanetQuery($planetId: ID!) {
    planet(id: $planetId) {
      residentConnection {
        residents {
          id
          name
          birthYear
          gender
        }
      }
    }
  }
`;

export default GET_BY_PLANET;