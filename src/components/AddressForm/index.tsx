import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Formik, ErrorMessage } from 'formik';
import { Item } from 'react-native-picker-select';

import { Button } from '../../components/Button';
import { Field } from '../../components/Field';
import { Select } from './Components';

import api from '../../services/api';
import {
  Container,
  ViewField,
  ViewForm,
  ViewFields,
  ScrollView,
} from './styles';
import { Props } from './props';

const AddAddress = ({ onSubmit, initialValues, textButton }: Props) => {
  const [states, setStates] = useState<Item[]>([]);
  const [cities, setCities] = useState<Item[]>([]);

  useEffect(() => {
    api.get(`/states`).then(({ data }) => {
      setStates(data.map(state => ({ label: state.name, value: state.id })));
    });
  }, []);

  const onChangeState = (stateId: string) => {
    api.get(`/state/${stateId}`).then(({ data }) => {
      setCities(
        data.result.map(cities => ({
          value: cities.id,
          label: cities.name,
        })),
      );
    });
  };

  return (
    <Container>
      <ScrollView>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ values, handleChange, handleSubmit, setFieldValue }) => (
            <ViewForm>
              <ViewFields>
                <ViewField>
                  <Field
                    textValue="Apelido"
                    textColor="black"
                    value={values.nickname}
                    onChangeText={handleChange('nickname')}
                  />
                  <ErrorMessage component={View} name="nickname" />
                </ViewField>
                <ViewField>
                  <Field
                    textValue="CEP"
                    textColor="black"
                    value={values.cep}
                    onChangeText={handleChange('cep')}
                  />
                  <ErrorMessage component={View} name="cep" />
                </ViewField>
                <ViewField>
                  <Field
                    textValue="Rua"
                    textColor="black"
                    value={values.street}
                    onChangeText={handleChange('street')}
                  />
                  <ErrorMessage component={View} name="street" />
                </ViewField>
                <ViewField>
                  <Field
                    textValue="Bairro"
                    textColor="black"
                    value={values.neighborhood}
                    onChangeText={handleChange('neighborhood')}
                  />
                  <ErrorMessage component={View} name="neighborhood" />
                </ViewField>
                <ViewField>
                  <Field
                    textValue="Número"
                    textColor="black"
                    value={values.number}
                    keyboardType="number-pad"
                    onChangeText={handleChange('number')}
                  />
                  <ErrorMessage component={View} name="number" />
                </ViewField>
                <ViewField
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '90%',
                    paddingTop: 25,
                  }}
                >
                  <Select
                    items={states}
                    value={values.state}
                    placeholder={{
                      value: 'Estado',
                      label: 'Estado',
                      color: '#000',
                    }}
                    onValueChange={value => {
                      setFieldValue('state', value);
                      onChangeState(value);
                    }}
                  />
                  <ErrorMessage component={View} name="state" />
                  <Select
                    items={cities}
                    value={values.city}
                    placeholder={{
                      value: 'Cidade',
                      label: 'Cidade',
                      color: '#000',
                    }}
                    onValueChange={value => setFieldValue('city', value)}
                  />
                  <ErrorMessage component={View} name="city" />
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
