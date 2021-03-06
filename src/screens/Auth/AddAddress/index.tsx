import React from 'react';
import { useDispatch } from 'react-redux';

import AddressForm from '../../../components/AddressForm';

import { addUserAddress } from '../../../store/ducks/user/user.actions';
import api from '../../../services/api';
import { Container } from './styles';

const AddAddress = () => {
  const dispatch = useDispatch();

  const initialValues = {
    nickname: '',
    zipCode: '',
    street: '',
    neighborhood: '',
    number: '',
    city: '',
    state: '',
  };

  const onSubmit = async (values: typeof initialValues) => {
    /* const { data } = await api.post('/addresses', values);

    dispatch(addUserAddress({ ...values, id: data })); */
    console.log(values);
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
