import { object, string } from 'yup';

const schema = object().shape({
  currentPassword: string().required(),
  newPassword: string().required(),
  confirmNewPassword: string().required(),
});

export default schema;
