import { Flex } from "@radix-ui/themes";
import DeletePlanet from "../delete-planet";
import BackButton from "../planet-view/back-button";
import { usePlanets } from "../../hooks/usePlanets";

type PlanetActionButtonsProps = {
  planetId: string;
};

const PlanetActionButtons = ({ planetId }: PlanetActionButtonsProps) => {
  const { getPlanetById } = usePlanets();
  const planet = getPlanetById(planetId);

  if (!planet) return null;

  return (
    <Flex direction={{
      initial: 'row',
      xs: 'column'
    }} gap="4">
      <DeletePlanet planet={planet} />
      <BackButton />
    </Flex>
  );
};

export default PlanetActionButtons;