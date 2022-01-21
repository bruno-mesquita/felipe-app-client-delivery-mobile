import { object, SchemaOf, string } from 'yup';

import type { Values } from './props';

const schema: SchemaOf<Values> = object().shape({
  cellphone: string().required(),
  code: string().required(),
  confirmPassword: string().required(),
  newPassword: string().required(),
});

export default schema;
