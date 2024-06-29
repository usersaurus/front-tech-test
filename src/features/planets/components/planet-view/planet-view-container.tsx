import { Planet } from "@/types/planet";
import PlanetView from "./planet-view";
import { usePlanets } from "../../hooks/usePlanets";

type PlanetViewContainerProps = {
  planetId: Planet['id'];
};

const PlanetViewContainer = ({ planetId }: PlanetViewContainerProps) => {
  const { getPlanetById } = usePlanets();
  const planet = getPlanetById(planetId);

  if (!planet) return <p>Planet not found</p>;

  return (
    <PlanetView planet={planet} />
  );
};

export default PlanetViewContainer;