import { Planet } from '@/types/planet';
import { Box, Card, Flex, Grid } from '@radix-ui/themes';
import PlanetView from '../planet-view/planet-view';
import PlanetRowActions from './planet-row-actions';

interface PlanetListProps {
  planets: Planet[];
}

const PlanetList = ({ planets }: PlanetListProps) => {
  return (
    <Box>
      <Grid gap="4" columns={{
        initial: "1",
        sm: "2",
        md: "3",
      }}>
        {planets.map((planet) => (
          <Card key={planet.id} size="3">
            <Flex
              justify="between"
              direction="column"
              height="100%"
              gap="6"
            >
              <PlanetView planet={planet} />
              <PlanetRowActions planet={planet} />
            </Flex>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default PlanetList;