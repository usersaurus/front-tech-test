import getPlanets from "../../actions/get-planets";
import PlanetList from "./planet-list";

const PlanetListContainer = () => {
  const planets = getPlanets();

  return (
    <PlanetList planets={planets} />
  );
};

export default PlanetListContainer;