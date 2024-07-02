import CreatePlanet from "@/features/planets/components/create-planet";
import { Card, Flex } from "@radix-ui/themes";

export const CreatePlanetRoute = () => {
  return (
    <Flex justify="center" align="center" height="100vh" m={{
      initial: "0",
      xs: "4"
    }}>
      <Card size="4" m="auto">
        <CreatePlanet />
      </Card>
    </Flex>
  );
};