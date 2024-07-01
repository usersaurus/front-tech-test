import { TextField } from "@radix-ui/themes";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ToFormPlanet } from "../../types/to-form-planet";

type FormFieldProps = {
  name: keyof ToFormPlanet;
  errors?: FieldErrors<ToFormPlanet>;
  register?: UseFormRegister<ToFormPlanet>;
};

const FormField = ({ name, errors = {}, register }: FormFieldProps) => {
  return (
    <>
      <label htmlFor="name">{name}</label>
      <TextField.Root placeholder={name} {...register!(name)} />
      <p>{errors[name]?.message}</p>
    </>
  );
};

export default FormField;