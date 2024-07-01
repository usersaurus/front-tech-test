import EditPlanetContainer from "@/features/planets/components/edit-planet/edit-planet-container";
import { Card, Flex } from "@radix-ui/themes";
import { useParams } from "react-router-dom";

export const EditPlanetRoute = () => {
  const { id } = useParams();
  if (!id) return <>Planet not found</>;

  return (
    <Flex justify="center" align="center" height="100vh" m={{
      initial: "0",
      xs: "4"
    }}>
      <Card size="4" m="auto">
        <EditPlanetContainer planetId={id} />
      </Card>
    </Flex>
  );
};