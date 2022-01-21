import { Formik } from 'formik';
import { useToast } from 'native-base';

import { AddressForm } from '@components';
import api from '@services/api';
import { useGetAddress, IAddress } from '@hooks';

import schema from './schema';

export const UpdateAddress = ({ route }) => {
  const toast = useToast();

  const { address } = useGetAddress(route.params.id);

  const onSubmit = async (values: IAddress) => {
    try {
      await api.put(`/adresses-client/${route.params.id}`, values);

      toast.show({
        w: '80%',
        title: 'Sucesso!',
        description: 'Endereço atualizado com sucesso',
        status: 'success',
      });
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
      initialValues={address}
      component={AddressForm}
      validationSchema={schema}
      enableReinitialize
    />
  );
};
