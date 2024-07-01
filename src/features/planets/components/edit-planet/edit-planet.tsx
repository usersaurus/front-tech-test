import { Button, Container, Heading } from "@radix-ui/themes";
import { formSchema } from "../../utils/form-schema";
import { ToFormPlanet } from "../../types/to-form-planet";
import { Planet } from "@/types/planet";
import { usePlanets } from "../../hooks/usePlanets";
import './edit-planet.module.css';
import FormField from "./form-field";
import { toast } from "react-toastify";
import Form from "@/components/ui/form/form";

type EditPlanetProps = {
  planet: Planet;
};

const EditPlanet = ({ planet }: EditPlanetProps) => {
  const defaultValues = {
    name: planet.name,
    climates: planet.climates.join(", "),
    terrains: planet.terrains.join(", "),
    population: planet.population,
    diameter: planet.diameter,
  };

  const { updatePlanet } = usePlanets();

  const onSubmit = (data: ToFormPlanet) => {
    updatePlanet(data, planet.id);
    toast.success("Planet updated successfully");
  };

  return (
    <Container width={{
      initial: "80vw",
      xs: "50vw"
    }}>
      <Heading mb="4">Edit Planet</Heading>
      <Form onSubmit={onSubmit} defaultValues={defaultValues} formSchema={formSchema}>
        <FormField name="name" />
        <FormField name="climates" />
        <FormField name="terrains" />
        <FormField name="population" />
        <FormField name="diameter" />

        <Button type="submit" mt="4">Submit</Button>
      </Form>
    </Container>
  );
};

export default EditPlanet;