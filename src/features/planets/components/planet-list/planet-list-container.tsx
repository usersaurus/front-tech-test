import { Box, Flex, Heading } from "@radix-ui/themes";
import { usePlanets } from "../../hooks/usePlanets";
import PlanetList from "./planet-list";
import AddButton from "@/components/add-button";
import Pagination from "@/components/ui/pagination/pagination";

const PAGE_SIZE = 9;

const PlanetListContainer = () => {
  const { getPaginatedPlanets, lastRequestedPage, setLastRequestedPage } = usePlanets();
  const { planets, total } = getPaginatedPlanets(lastRequestedPage, PAGE_SIZE);

  const handleOnChange = (page: number) => {
    setLastRequestedPage(page);
  };

  return (
    <Box>
      <Heading mb="4">Planets</Heading>
      <AddButton mb="4" />
      <PlanetList planets={planets} />
      <Flex mt="6" justify="center">
        <Pagination current={lastRequestedPage} total={total} onChange={handleOnChange} />
      </Flex>
    </Box>
  );
};

export default PlanetListContainer;