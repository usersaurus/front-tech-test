import DataRow from "@/components/ui/data-table/data-row";
import { Planet } from "@/types/planet";
import PlanetRowActions from "./planet-row-actions";

type PlanetRowProps = {
  planet: Planet;
};

const PlanetRow = ({ planet }: PlanetRowProps) => {
  const { name, id, ...rest } = planet;
  const restValues = Object.values(rest)
    .map(value => value?.toString() ?? 'unknown');

  const PlanetRowActionsComponent = <PlanetRowActions planet={planet} />;

  return (
    <DataRow rowHeaderCell={name} data={[...restValues, PlanetRowActionsComponent]} key={id} />
  );
};

export default PlanetRow;