import PlanetViewContainer from '@/features/planets/components/planet-view';
import ResidentListContainer from '@/features/residents/components/resident-list';
import { Card, Flex } from '@radix-ui/themes';
import { useParams } from 'react-router-dom';

export const PlanetViewRoute = () => {
  const { id } = useParams();
  if (!id) return <>Planet not found</>;

  return (
    <Flex align="center" justify="center" height="100%">
      <Card size="4" variant="surface">
        <Flex gap="8" >
          <PlanetViewContainer planetId={id} />
          <ResidentListContainer planetId={id} />
        </Flex>
      </Card>
    </Flex>
  );
};