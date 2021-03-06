import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import AddressForm from '../../../components/AddressForm';

import { updateUserAddress } from '../../../store/ducks/user/user.actions';
import api from '../../../services/api';
import { Container } from './styles';

const AddAddress = () => {
  const dispatch = useDispatch();
  const { id } = useRoute<any>().params;

  const address = useSelector(({ user }) =>
    user.profile.adresses.find(item => item.id === id),
  );

  const initialValues = { ...address };

  const onSubmit = async (values: typeof initialValues) => {
    /* const { data, status } = await api.put(`/addresses/${id}`, values);

    if(status === 200) {
      dispatch(updateUserAddress(values));
    }
     */
    console.log(values);
  };

  return (
    <Container>
      <AddressForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        textButton="Atualizar"
      />
    </Container>
  );
};

export default AddAddress;
