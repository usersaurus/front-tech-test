import { Button, Container, Flex, Heading } from "@radix-ui/themes";
import { formSchema } from "../../utils/form-schema";
import { ToFormPlanet } from "../../types/to-form-planet";
import { usePlanets } from "../../hooks/usePlanets";
import './create-planet.module.css';
import FormField from "@/components/ui/form/form-field";
import { toast } from "react-toastify";
import Form from "@/components/ui/form/form";
import BackButton from "@/components/back-button";
import { useNavigate } from "react-router-dom";

const CreatePlanet = () => {
  const { addPlanet } = usePlanets();
  const navigate = useNavigate();

  const onSubmit = (data: ToFormPlanet) => {
    addPlanet(data);
    toast.success("Planet created successfully");
    navigate("/");
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
        <Flex gap="4" justify="end">
          <Button type="submit">Create</Button>
          <BackButton />
        </Flex>
      </Form>
    </Container>
  );
};

export default CreatePlanet;