import Dialog from "@/components/ui/dialog/dialog";
import { Planet } from "@/types/planet";
import { usePlanets } from "@/features/planets/hooks/usePlanets";
import { TrashIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";

interface DeletePlanetProps {
  planet: Planet;
}

const DeletePlanet = ({ planet }: DeletePlanetProps) => {
  const { deletePlanet } = usePlanets();

  return (
    <Dialog
      title="Delete planet"
      description="Are you sure you want to remove this planet from the Rebel Alliance database? The Galactic Empire will know."
      confirmText="Delete planet"
      cancelText="Cancel"
      onConfirm={() => {
        deletePlanet(planet);
      }}
      button={
        <IconButton>
          <TrashIcon />
        </IconButton>
      }
    />
  );
};

export default DeletePlanet;