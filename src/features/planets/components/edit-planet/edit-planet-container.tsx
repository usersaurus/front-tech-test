import { usePlanets } from "../../hooks/usePlanets";
import EditPlanet from "./edit-planet";

type EditPlanetContainerProps = {
  planetId: string;
};

const EditPlanetContainer = ({ planetId }: EditPlanetContainerProps) => {
  const { getPlanetById } = usePlanets();
  const planet = getPlanetById(planetId);

  if (!planet) return null;

  return (
    <EditPlanet planet={planet} />
  );
};

export default EditPlanetContainer;