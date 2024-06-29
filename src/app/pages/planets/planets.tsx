import PlanetListContainer from '@/features/planets/components/planet-list';
import { Card } from '@radix-ui/themes';

export const PlanetsRoute = () => {
  return (
    <Card mt="4" size="4">
      <PlanetListContainer />
    </Card>
  );
};