import Dialog from "@/components/ui/dialog/dialog";
import { Planet } from "@/types/planet";
import { usePlanets } from "@/features/planets/hooks/usePlanets";
import { TrashIcon } from "@radix-ui/react-icons";
import { IconButton, Tooltip } from "@radix-ui/themes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface DeletePlanetProps {
  planet: Planet;
}

const DeletePlanet = ({ planet }: DeletePlanetProps) => {
  const { deletePlanet } = usePlanets();
  const navigate = useNavigate();

  return (

    <Dialog
      title="Delete planet"
      description="Are you sure you want to remove this planet from the Rebel Alliance database? The Galactic Empire will know."
      confirmText="Delete planet"
      cancelText="Cancel"
      onConfirm={() => {
        deletePlanet(planet);
        toast.success("Planet deleted successfully");
        navigate("/");
      }}
      button={
        <IconButton aria-label="delete button">
          <Tooltip content="Delete planet">
            <TrashIcon />
          </Tooltip>
        </IconButton>
      }
    />

  );
};

export default DeletePlanet;