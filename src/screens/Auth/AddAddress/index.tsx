import React from 'react';
import { Alert } from 'react-native';
import { FormikHelpers, Formik } from 'formik';

import { AddressForm } from '../../../components';

import api from '../../../services/api';
import { Container } from './styles';

const AddAddress = () => {
  const initialValues = {
    nickname: '',
    cep: '',
    street: '',
    neighborhood: '',
    number: '',
    city: '',
    state: '',
  };

  const onSubmit = async (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>,
  ) => {
    try {
      await api.post('/adresses-client', values);

      Alert.alert('Endereço adicionado com sucesso');
      resetForm();
    } catch (err) {
      Alert.alert('Erro ao criar');
    }
  };

  return (
    <Container>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        component={AddressForm}
      />
    </Container>
  );
};

export default AddAddress;
