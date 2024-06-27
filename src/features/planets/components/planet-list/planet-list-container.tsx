import { usePlanets } from "../../hooks/usePlanets";
import PlanetList from "./planet-list";

const PlanetListContainer = () => {
  const { planets } = usePlanets();

  return (
    <PlanetList planets={planets} />
  );
};

export default PlanetListContainer;