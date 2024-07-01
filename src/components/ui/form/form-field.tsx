import { TextField } from "@radix-ui/themes";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type FormFieldProps = {
  name: string;
  errors?: FieldErrors<FieldValues>;
  register?: UseFormRegister<FieldValues>;
};

const FormField = ({ name, errors = {}, register }: FormFieldProps) => {
  return (
    <>
      <label htmlFor="name">{name}</label>
      <TextField.Root placeholder={name} {...register!(name)} />
      <p>{errors[name]?.message?.toString()}</p>
    </>
  );
};

export default FormField;