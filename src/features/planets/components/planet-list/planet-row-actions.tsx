import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Tooltip } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { Planet } from "@/types/planet";
import DeletePlanet from "../delete-planet";

type PlanetRowActionsProps = {
  planet: Planet;
};

const PlanetRowActions = ({ planet }: PlanetRowActionsProps) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/${planet.id}`);
  };

  return (
    <Flex gap="3">
      <Tooltip content="View details">
        <IconButton onClick={handleView} aria-label="view button">
          <EyeOpenIcon />
        </IconButton>
      </Tooltip>
      <DeletePlanet planet={planet} />
    </Flex>
  );
};

export default PlanetRowActions;