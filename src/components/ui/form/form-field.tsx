import { TextField } from "@radix-ui/themes";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type FormFieldProps = {
  name: string;
  errors?: FieldErrors<FieldValues>;
  register?: UseFormRegister<FieldValues>;
};

const FormField = ({ name, errors = {}, register }: FormFieldProps) => {
  const hasError = errors[name]?.message;

  return (
    <>
      <label htmlFor="name">{name}</label>
      <TextField.Root
        placeholder={name}
        {...register!(name)}
        color={hasError ? 'amber' : undefined}
        variant="soft"
        aria-label={name}
      />
      <p>{errors[name]?.message?.toString()}</p>
    </>
  );
};

export default FormField;