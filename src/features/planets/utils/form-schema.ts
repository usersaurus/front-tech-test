import * as yup from 'yup';

export const formSchema = yup.object({
  name: yup.string().required().typeError('Name is required'),
  climates: yup.string().required().test(
    'is-comma-separated',
    'Climates must be a comma-separated string',
    value => {
      return /^(?!\s*$).+/.test(value) && /^[\w\s]+(?:,[\w\s]+)*$/.test(value);
    }
  ),
  diameter: yup.number().positive().integer().required().typeError('Diameter must be a number'),
  terrains: yup.string().required().test(
    'is-comma-separated',
    'Terrains must be a comma-separated string',
    value => /^(?!\s*$).+/.test(value) && /^[\w\s]+(?:,[\w\s]+)*$/.test(value)
  ),
  population: yup.number().positive().integer().required().typeError('Population must be a number'),
}).required();