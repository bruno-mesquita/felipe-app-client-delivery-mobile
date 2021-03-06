import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { Formik, ErrorMessage } from 'formik';

import { Button } from '../../components/Button';
import { Field } from '../../components/Field';

import api from '../../services/api';
import {
  Container,
  ViewField,
  ViewForm,
  ViewFields,
  ScrollView,
} from './styles';
import { Props, Values } from './props';

const AddAddress = ({ onSubmit, initialValues, textButton }: Props) => {
  const dispatch = useDispatch();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    /* api.get('/states').then(({ data }) => setStates(data)); */
  }, []);

  /* const getCities = async (stateId: string) => {
    const { data } = await api.get(`/cities/${stateId}`);

    setCities(data);
  } */

  return (
    <Container>
      <ScrollView>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ values, handleChange, handleSubmit }) => (
            <ViewForm>
              <ViewFields>
                <ViewField>
                  <Field
                    textValue="Apelido"
                    textColor="black"
                    value={values.nickname}
                    secureTextEntry
                    onChangeText={handleChange('nickname')}
                  />
                  <ErrorMessage component={View} name="nickname" />
                </ViewField>
                <ViewField>
                  <Field
                    textValue="CEP"
                    textColor="black"
                    value={values.zipCode}
                    secureTextEntry
                    onChangeText={handleChange('zipCode')}
                  />
                  <ErrorMessage component={View} name="zipCode" />
                </ViewField>
                <ViewField>
                  <Field
                    textValue="Rua"
                    textColor="black"
                    value={values.street}
                    secureTextEntry
                    onChangeText={handleChange('street')}
                  />
                  <ErrorMessage component={View} name="street" />
                </ViewField>
                <ViewField>
                  <Field
                    textValue="Bairro"
                    textColor="black"
                    value={values.neighborhood}
                    secureTextEntry
                    onChangeText={handleChange('neighborhood')}
                  />
                  <ErrorMessage component={View} name="neighborhood" />
                </ViewField>
                <ViewField>
                  <Field
                    textValue="Número"
                    textColor="black"
                    value={values.number}
                    secureTextEntry
                    onChangeText={handleChange('number')}
                  />
                  <ErrorMessage component={View} name="number" />
                </ViewField>
                <ViewField>
                  <Field
                    textValue="Cidade"
                    textColor="black"
                    value={values.city}
                    secureTextEntry
                    onChangeText={handleChange('city')}
                  />
                  <ErrorMessage component={View} name="city" />
                </ViewField>
                <ViewField>
                  <Field
                    textValue="Estado"
                    textColor="black"
                    value={values.state}
                    secureTextEntry
                    onChangeText={handleChange('state')}
                  />
                  <ErrorMessage component={View} name="state" />
                </ViewField>
              </ViewFields>
              <View style={{ marginBottom: 50 }}>
                <Button primaryColor onPress={handleSubmit}>
                  {textButton}
                </Button>
              </View>
            </ViewForm>
          )}
        </Formik>
      </ScrollView>
    </Container>
  );
};

export default AddAddress;
