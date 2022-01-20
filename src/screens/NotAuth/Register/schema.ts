import { SchemaOf, object, string } from 'yup';

import { Values } from './types';

const schema: SchemaOf<Values> = object().shape({
  name: string().trim().required(),
  email: string().trim().email('Email inválido').required(),
  cpf: string().trim().required(),
  cellphone: string().trim().required(),
  confirmPassword: string().trim().required(),
  password: string().trim().required(),
  city: string().trim().required().nullable(),
  state: string().trim().required().nullable(),
});

export default schema;
