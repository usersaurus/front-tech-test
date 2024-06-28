import { Planet } from '@/types/planet';
import { planetKeys } from '@/features/planets/utils/planetUtils';
import DataTable from '@/components/ui/data-table/data-table';
import PlanetRow from './planet-row';

interface PlanetListProps {
  planets: Planet[];
}

const PlanetList = ({ planets }: PlanetListProps) => {
  return (
    <div>
      <h2>Planet List</h2>
      <DataTable header={[...planetKeys, 'actions']}>
        {planets.map(planet => (
          <PlanetRow key={planet.id} planet={planet} />
        ))}
      </DataTable>
    </div>
  );
};

export default PlanetList;