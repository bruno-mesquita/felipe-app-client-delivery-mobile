import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AddressForm from '../../../components/AddressForm';

import api from '../../../services/api';
import { Container } from './styles';

const AddAddress = () => {
  const navigation = useNavigation();

  const initialValues = {
    nickname: '',
    cep: '',
    street: '',
    neighborhood: '',
    number: null,
    city: '',
    state: '',
  };

  const onSubmit = async (values: typeof initialValues) => {
    try {
      await api.post('/adresses-client', values);

      navigation.navigate('Address');
    } catch (err) {
      Alert.alert('Erro ao criar');
    }
  };

  return (
    <Container>
      <AddressForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        textButton="Cadastrar"
      />
    </Container>
  );
};

export default AddAddress;
