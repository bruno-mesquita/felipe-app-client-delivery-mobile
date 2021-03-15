import { SchemaOf, object, string } from 'yup';

import { Values } from './types';

const REQUIRED = 'Campo obrigátorio';

const schema: SchemaOf<Values> = object().shape({
  name: string().required(REQUIRED),
  email: string().email('Email inválido').required(REQUIRED),
  cpf: string().required(REQUIRED),
  cellphone: string().required(REQUIRED),
  confirmPassword: string().required(REQUIRED),
  password: string().required(REQUIRED),
  city: string().uuid().required(REQUIRED),
});

export default schema;
