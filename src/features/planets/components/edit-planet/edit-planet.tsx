import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Heading } from "@radix-ui/themes";
import { useForm, SubmitHandler } from "react-hook-form";
import { formSchema } from "../../utils/form-schema";
import { ToFormPlanet } from "../../types/to-form-planet";
import { Planet } from "@/types/planet";
import { usePlanets } from "../../hooks/usePlanets";
import './edit-planet.module.css';
import FormField from "./form-field";
import { toast } from "react-toastify";

type EditPlanetProps = {
  planet: Planet;
};

const EditPlanet = ({ planet }: EditPlanetProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ToFormPlanet>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: planet.name,
      climates: planet.climates.join(", "),
      terrains: planet.terrains.join(", "),
      population: planet.population,
      diameter: planet.diameter,
    },
  });

  const { updatePlanet } = usePlanets();

  const onSubmit: SubmitHandler<ToFormPlanet> = (data) => {
    updatePlanet(data, planet.id);
    toast.success("Planet updated successfully");
  };

  return (
    <Container width={{
      initial: "80vw",
      xs: "50vw"
    }}>
      <Heading mb="4">Edit Planet</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField fieldName="name" errors={errors} register={register} />
        <FormField fieldName="climates" errors={errors} register={register} />
        <FormField fieldName="terrains" errors={errors} register={register} />
        <FormField fieldName="population" errors={errors} register={register} />
        <FormField fieldName="diameter" errors={errors} register={register} />

        <Button type="submit" mt="4">Submit</Button>
      </form>
    </Container>
  );
};

export default EditPlanet;