import { Box, Heading } from "@radix-ui/themes";
import { usePlanets } from "../../hooks/usePlanets";
import PlanetList from "./planet-list";
import AddButton from "@/components/add-button";

const PlanetListContainer = () => {
  const { planets } = usePlanets();

  return (
    <Box>
      <Heading mb="4">Planets</Heading>
      <AddButton mb="4" />
      <PlanetList planets={planets} />
    </Box>
  );
};

export default PlanetListContainer;