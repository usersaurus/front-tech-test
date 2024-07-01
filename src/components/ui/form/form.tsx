import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FieldValues, Resolver, UseFormProps, useForm } from "react-hook-form";
import { ObjectSchema } from "yup";

type FormProps<T extends FieldValues> = {
  defaultValues?: UseFormProps<T>['defaultValues'];
  formSchema: ObjectSchema<T>;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
};

function Form<T extends FieldValues>({ defaultValues, formSchema, onSubmit, children }: FormProps<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: yupResolver(formSchema) as unknown as Resolver<T>,
    defaultValues
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} name="form">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        return child.props.name
          ? React.createElement(child.type, {
            ...{
              ...child.props,
              register,
              key: child.props.name,
              errors
            },
          })
          : child;
      })}
    </form>
  );
}

export default Form;