import { FormikHelpers, Formik } from 'formik';
import { useToast } from 'native-base';

import type { IAddress } from '@hooks';
import { AddressForm } from '@components';
import api from '@services/api';

import schema from './schema';

export const AddAddress = () => {
  const toast = useToast();

  const initialValues: Omit<IAddress, 'id'> = {
    nickname: '',
    cep: '',
    street: '',
    neighborhood: '',
    number: 0,
    city: 0,
    state: 0,
  };

  const onSubmit = async (
    values: IAddress,
    { resetForm }: FormikHelpers<Omit<IAddress, 'id'>>
  ) => {
    try {
      await api.post('/adresses-client', values);

      toast.show({
        w: '80%',
        title: 'Sucesso!',
        description: 'Endereço adicionado com sucesso',
        status: 'success',
      });
      resetForm();
    } catch (err) {
      toast.show({
        w: '80%',
        title: 'Erro',
        description: 'Houve um erro, tente novamente',
        status: 'error',
      });
    }
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      component={AddressForm}
      validationSchema={schema}
    />
  );
};
