import { useQuery } from "@apollo/client";
import GET_BY_PLANET, { GetResidentsData } from "@/features/residents/graphql/queries/get-by-planet";

export const useResidents = (planetId: string) => {
  const { data, loading, error } = useQuery<GetResidentsData>(GET_BY_PLANET, {
    variables: { planetId },
  });

  return {
    residents: data?.planet.residentConnection.residents,
    loading,
    error,
  };
};