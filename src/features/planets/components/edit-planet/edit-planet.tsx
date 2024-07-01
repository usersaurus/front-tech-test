import { Button, Container, Flex, Heading } from "@radix-ui/themes";
import { formSchema } from "../../utils/form-schema";
import { ToFormPlanet } from "../../types/to-form-planet";
import { Planet } from "@/types/planet";
import { usePlanets } from "../../hooks/usePlanets";
import './edit-planet.module.css';
import FormField from "@/components/ui/form/form-field";
import { toast } from "react-toastify";
import Form from "@/components/ui/form/form";
import BackButton from "@/components/back-button";

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
    <Container maxWidth="800px" width={{ initial: "80vw" }}>
      <Heading mb="4">Edit Planet</Heading>
      <Form onSubmit={onSubmit} defaultValues={defaultValues} formSchema={formSchema}>
        <FormField name="name" />
        <FormField name="climates" />
        <FormField name="terrains" />
        <FormField name="population" />
        <FormField name="diameter" />

        <Flex gap="4" justify="end">
          <Button type="submit">Update</Button>
          <BackButton />
        </Flex>
      </Form>
    </Container>
  );
};

export default EditPlanet;