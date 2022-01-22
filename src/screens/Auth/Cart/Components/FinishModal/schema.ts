import { object, string, number, SchemaOf } from 'yup';

import type { IValues } from './types';

const schema: SchemaOf<IValues> = object({
  address_id: number().required(),
  establishment_id: number().required(),
  payment: string().required(),
  transshipment: number().required().default(0),
  note: string(),
});

export default schema;
