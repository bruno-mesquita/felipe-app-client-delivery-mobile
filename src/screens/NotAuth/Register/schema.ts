import { SchemaOf, object, string } from 'yup';

import { Values } from './types';

const REQUIRED = 'Campo obrigátorio';

const schema: SchemaOf<Values> = object().shape({
  name: string().trim().required(REQUIRED),
  email: string().trim().email('Email inválido').required(REQUIRED),
  cpf: string().trim().required(REQUIRED),
  cellphone: string().trim().required(REQUIRED),
  confirmPassword: string().trim().required(REQUIRED),
  password: string().trim().required(REQUIRED),
  city: string().trim().required(REQUIRED).nullable(),
  state: string().trim().required(REQUIRED).nullable(),
});

export default schema;
