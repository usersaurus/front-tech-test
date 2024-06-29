import { Planet } from "@/types/planet";
import { Box, DataList, Heading } from "@radix-ui/themes";

type PlanetViewProps = {
  planet: Planet
}

const PlanetView = ({ planet }: PlanetViewProps) => {
  const { id, name, climates, terrains, ...rest } = planet;
  const planetData = {
    climates: climates.join(", "),
    terrains: terrains.join(", "),
    ...rest
  };

  return (
    <Box key={id}>
      <Heading mb="4">{name}</Heading>
      <DataList.Root>
        {Object.entries(planetData).map(([key, value]) => {
          return (
            <DataList.Item key={`${id}-${key}`}>
              <DataList.Label>{key}</DataList.Label>
              <DataList.Value>{value}</DataList.Value>
            </DataList.Item>
          );
        })}
      </DataList.Root>
    </Box>
  );
};

export default PlanetView;