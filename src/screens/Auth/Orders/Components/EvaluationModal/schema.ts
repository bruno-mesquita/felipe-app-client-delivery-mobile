import { SchemaOf, object, string, number } from 'yup';

import type { IRate } from '@hooks';

const schema: SchemaOf<Omit<IRate, 'id'>> = object().shape({
  message: string().required(),
  value: number().positive().integer().required(),
});

export default schema;
