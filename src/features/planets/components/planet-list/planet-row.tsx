import DataRow from "@/components/ui/data-table/data-row";
import { Planet } from "@/types/planet";
import PlanetRowActions from "./planet-row-actions";

type PlanetRowProps = {
  planet: Planet;
};

const PlanetRow = ({ planet }: PlanetRowProps) => {
  const { name, id, climates, terrains, ...rest } = planet;
  const PlanetRowActionsComponent = <PlanetRowActions planet={planet} />;
  const restValues = Object.values({
    climates: climates.join(", "),
    terrains: terrains.join(", "),
    ...rest
  });

  return (
    <DataRow rowHeaderCell={name} data={[...restValues, PlanetRowActionsComponent]} key={id} />
  );
};

export default PlanetRow;