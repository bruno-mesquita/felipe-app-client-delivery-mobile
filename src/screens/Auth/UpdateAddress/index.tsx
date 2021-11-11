import { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import { Formik } from 'formik';

import { AddressForm } from '../../../components';

import {  } from '../../../services/api';
import { Container } from './styles';
import { Address } from './props';

export const UpdateAddress = ({ route }) => {


  const [address, setAddress] = useState({
    id: '',
    street: '',
    cep: '',
    city: '',
    neighborhood: '',
    nickname: '',
    number: '',
    state: '',
  });

  const getAddress = useCallback(async () => {
    try {
      const { data } = await api.get(`/adresses-client/${route.params.id}`);

      setAddress(data.result);
    } catch (err) {
      Alert.alert('Erro ao buscar endereço');
    }
  }, []);

  useEffect(() => {
    getAddress();
  }, [getAddress]);

  const onSubmit = async (values: Address) => {
    try {
      await api.put(`/adresses-client/${route.params.id}`, values);

      Alert.alert('Endereço atualizado com sucesso');
    } catch (err) {
      Alert.alert('Erro ao atualizar');
      console.log(err.response);
    }
  };

  return (
    <Container>
      <Formik
        onSubmit={onSubmit}
        initialValues={address}
        component={AddressForm}
        enableReinitialize
      />
    </Container>
  );
};
