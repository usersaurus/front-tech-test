import { Flex, IconButton } from "@radix-ui/themes";
import DeletePlanet from "../delete-planet";
import BackButton from "@/components/back-button";
import { usePlanets } from "../../hooks/usePlanets";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

type PlanetActionButtonsProps = {
  planetId: string;
};

const PlanetActionButtons = ({ planetId }: PlanetActionButtonsProps) => {
  const { getPlanetById } = usePlanets();
  const planet = getPlanetById(planetId);
  const navigate = useNavigate();

  if (!planet) return null;

  return (
    <Flex direction={{
      initial: 'row',
      xs: 'column'
    }} gap="4">
      <DeletePlanet planet={planet} />
      <IconButton onClick={() => navigate('edit')}><Pencil1Icon /></IconButton>
      <BackButton />
    </Flex>
  );
};

export default PlanetActionButtons;