import { Planet } from '@/types/planet';
import { planetKeys } from '@/features/planets/utils/planetUtils';
import DataTable from '@/components/ui/data-table/data-table';
import PlanetRow from './planet-row';
import { Box, Heading } from '@radix-ui/themes';

interface PlanetListProps {
  planets: Planet[];
}

const tableHeader: (keyof Planet | 'actions')[] = [...planetKeys, 'actions'];

const PlanetList = ({ planets }: PlanetListProps) => {
  return (
    <Box>
      <Heading mb="4">Planets</Heading>
      <DataTable header={tableHeader}>
        {planets.map(planet => (
          <PlanetRow key={planet.id} planet={planet} />
        ))}
      </DataTable>
    </Box>
  );
};

export default PlanetList;