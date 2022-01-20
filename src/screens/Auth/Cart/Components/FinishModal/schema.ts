import { object, string, number } from 'yup';

const schema = object({
  address_id: number().required(),
  establishment_id: number().required(),
  payment: string().required(),
  transshipment: number().required().default(0),
});

export default schema;
