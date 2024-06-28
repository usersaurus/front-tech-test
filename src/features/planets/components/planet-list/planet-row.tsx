import DataRow from "@/components/ui/data-table/data-row";
import { Planet } from "@/types/planet";
import DeletePlanet from "../delete-planet";

type PlanetRowProps = {
  planet: Planet;
};

const PlanetRow = ({ planet }: PlanetRowProps) => {
  const { name, id, ...rest } = planet;
  const restValues = Object.values(rest);
  const DeletePlanetComponent = <DeletePlanet planet={planet} />;

  return (
    <>
      <DataRow rowHeaderCell={name} data={[...restValues, DeletePlanetComponent]} key={id} />
    </>
  );
};

export default PlanetRow;