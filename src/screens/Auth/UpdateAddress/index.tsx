import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

import AddressForm from '../../../components/AddressForm';

import api from '../../../services/api';
import { Container } from './styles';
import { Address } from './props';

export const UpdateAddress = () => {
  const { id } = useRoute<any>().params;

  const [address, setAddress] = useState({
    id: '',
    street: '',
    cep: '',
    city: '',
    neighborhood: '',
    nickname: '',
    number: '0',
    state: '',
  });

  useEffect(() => {
    api.get(`/adresses-client/${id}`).then(({ data }) => {
      setAddress({ ...data.result, number: data.result.number.toString() });
    });
  }, []);

  const onSubmit = async (values: Address) => {
    try {
      await api.put(`/adresses-client/${id}`, {
        ...values,
        number: Number(values.number),
      });

      Alert.alert('Endereço atualizado com sucesso');
    } catch (err) {
      Alert.alert('Erro ao atualizar');
      console.log(err.response);
    }
  };

  return (
    <Container>
      <AddressForm
        onSubmit={onSubmit}
        initialValues={address}
        textButton="Atualizar"
      />
    </Container>
  );
};
