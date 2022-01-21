import { object, string, number, SchemaOf } from 'yup';

import type { IAddress } from '@hooks';

const schema: SchemaOf<Omit<IAddress, 'id'>> = object().shape({
  cep: string().required(),
  street: string().required(),
  neighborhood: string().required(),
  nickname: string().required(),
  city: number().integer().positive().required(),
  number: number().positive().integer().required(),
  state: number().positive().integer().required(),
});

export default schema;
