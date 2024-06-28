import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Flex, IconButton } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { Planet } from "@/types/planet";
import DeletePlanet from "../delete-planet";

type PlanetRowActionsProps = {
  planet: Planet;
};

const PlanetRowActions = ({ planet }: PlanetRowActionsProps) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/planets/${planet.id}`);
  };

  return (
    <Flex gap="3">
      <IconButton onClick={handleView}>
        <EyeOpenIcon />
      </IconButton>
      <DeletePlanet planet={planet} />
    </Flex>
  );
};

export default PlanetRowActions;