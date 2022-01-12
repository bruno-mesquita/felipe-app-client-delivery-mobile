import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Formik } from 'formik';

import { AddressForm } from '@components';
import api from '@services/api';

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

  useEffect(() => {
    api
      .get(`/adresses-client/${route.params.id}`)
      .then(({ data }) => setAddress(data.result))
      .catch(() => Alert.alert('Erro', 'Erro ao buscar endereço'));
  }, [route.params.id]);

  const onSubmit = async (values: Address) => {
    try {
      await api.put(`/adresses-client/${route.params.id}`, values);

      Alert.alert('Sucesso!', 'Endereço atualizado com sucesso');
    } catch (err) {
      Alert.alert('Erro', 'Erro ao atualizar');
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
