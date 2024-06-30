import { TextField } from "@radix-ui/themes";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ToFormPlanet } from "../../types/to-form-planet";

type FormFieldProps = {
  fieldName: keyof ToFormPlanet;
  errors: FieldErrors<ToFormPlanet>;
  register: UseFormRegister<ToFormPlanet>;
};

const FormField = ({ fieldName, errors = {}, register }: FormFieldProps) => {
  return (
    <>
      <label htmlFor="name">{fieldName}</label>
      <TextField.Root placeholder={fieldName} {...register(fieldName)} />
      <p>{errors[fieldName]?.message}</p>
    </>
  );
};

export default FormField;