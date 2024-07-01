import { Button, Container, Heading } from "@radix-ui/themes";
import { formSchema } from "../../utils/form-schema";
import { ToFormPlanet } from "../../types/to-form-planet";
import { usePlanets } from "../../hooks/usePlanets";
import './create-planet.module.css';
import FormField from "@/components/ui/form/form-field";
import { toast } from "react-toastify";
import Form from "@/components/ui/form/form";

const CreatePlanet = () => {
  const { addPlanet } = usePlanets();

  const onSubmit = (data: ToFormPlanet) => {
    console.log(data);
    addPlanet(data);

    toast.success("Planet created successfully");
  };

  return (
    <Container width={{
      initial: "80vw",
      xs: "50vw"
    }}>
      <Heading mb="4">Create Planet</Heading>
      <Form onSubmit={onSubmit} formSchema={formSchema}>
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

export default CreatePlanet;