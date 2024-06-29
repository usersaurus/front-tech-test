import PlanetListContainer from '@/features/planets/components/planet-list';
import { Card } from '@radix-ui/themes';

export const PlanetsRoute = () => {
  return (
    <Card size="4" m="4">
      <PlanetListContainer />
    </Card>
  );
};