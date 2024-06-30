import PlanetActionButtons from '@/features/planets/components/planet-view/planet-action-buttons';
import PlanetViewContainer from '@/features/planets/components/planet-view';
import ResidentListContainer from '@/features/residents/components/resident-list';
import { Card, Flex } from '@radix-ui/themes';
import { useParams } from 'react-router-dom';

export const PlanetViewRoute = () => {
  const { id } = useParams();
  if (!id) return <>Planet not found</>;

  return (
    <Flex justify="center" m={{
      initial: "0",
      xs: "4"
    }}>
      <Card size="4">
        <Flex gap="8" direction={{
          'initial': 'column',
          'xs': 'row'
        }}>
          <PlanetViewContainer planetId={id} />
          <ResidentListContainer planetId={id} />
          <PlanetActionButtons planetId={id} />
        </Flex>
      </Card>
    </Flex>
  );
};