import { object, string, number } from 'yup';

const REQUIRED = 'Campo obrigatório';

const schema = object({
  address_id: number().required(REQUIRED),
  establishment_id: number().required(REQUIRED),
  payment: string().required(REQUIRED),
  transshipment: number().required(REQUIRED).default(0),
});

export default schema;
