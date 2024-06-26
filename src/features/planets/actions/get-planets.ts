import SWStore from "@/store";

const getPlanets = () => {
  const planets = SWStore(state => state.planets);

  return planets;
};

export default getPlanets;