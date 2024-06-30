import PlanetListContainer from '@/features/planets/components/planet-list';
import { Card } from '@radix-ui/themes';

export const PlanetsRoute = () => {
  return (
    <Card size="4" m={{
      initial: "0",
      xs: "4"
    }}>
      <PlanetListContainer />
    </Card>
  );
};