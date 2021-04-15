import { object, string, number, boolean } from 'yup';

const REQUIRED = 'Campo obrigatório';

const schema = object({
  addressId: number().required(REQUIRED),
  establishmentId: number().required(REQUIRED),
  payment: string().required(REQUIRED),
  transshipment: number().required(REQUIRED).default(0),
  invoice: boolean().default(false),
});

export default schema;
