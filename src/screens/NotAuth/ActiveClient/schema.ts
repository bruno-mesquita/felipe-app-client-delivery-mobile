import { string, object } from 'yup';

export default object().shape({
  code: string().trim().required('Campo obrigátorio'),
});
