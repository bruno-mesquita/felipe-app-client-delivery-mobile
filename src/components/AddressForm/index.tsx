import { View } from 'react-native';
import { FormikProps } from 'formik';

import { Field, Select, FieldMask } from '../FormUtils';
import { Button } from '../Button';

import {
  Container,
  ViewField,
  ViewForm,
  ViewFields,
  ScrollView,
  Error,
} from './styles';
import { Values } from './props';

export const AddressForm = ({
  values,
  handleChange,
  handleSubmit,
  setFieldValue,
}: FormikProps<Values>) => (
  <Container>
    <ScrollView>
      <ViewForm>
        <ViewFields>
          <ViewField>
            <Field
              label="Apelido"
              labelColor="black"
              value={values.nickname}
              onChangeText={handleChange('nickname')}
            />
            <Error name="nickname" />
          </ViewField>
          <ViewField>
            <FieldMask
              type="custom"
              options={{ mask: '99999-999' }}
              label="CEP"
              labelColor="black"
              value={values.cep}
              onChangeText={handleChange('cep')}
            />
            <Error name="cep" />
          </ViewField>
          <ViewField>
            <Field
              label="Rua"
              labelColor="black"
              value={values.street}
              onChangeText={handleChange('street')}
            />
            <Error name="street" />
          </ViewField>
          <ViewField>
            <Field
              label="Bairro"
              labelColor="black"
              value={values.neighborhood}
              onChangeText={handleChange('neighborhood')}
            />
            <Error name="neighborhood" />
          </ViewField>
          <ViewField>
            <Field
              label="Número"
              labelColor="black"
              value={values.number}
              keyboardType="number-pad"
              onChangeText={handleChange('number')}
            />
            <Error name="number" />
          </ViewField>
          <ViewField>
            <Select
              labelColor="black"
              label="Estado"
              onChange={value => setFieldValue('state', value)}
              path="/states"
              value={values.state}
              placeholder="Selecione um estado"
            />
            <Error name="state" />
          </ViewField>

          <ViewField>
            <Select
              label="Cidade"
              labelColor="black"
              onChange={value => setFieldValue('city', value)}
              path={`/states/${values.state}/cities`}
              value={values.city}
              placeholder="Selecione uma cidade"
            />
            <Error name="city" />
          </ViewField>
        </ViewFields>
        <View style={{ marginBottom: 50 }}>
          <Button primaryColor onPress={() => handleSubmit()}>
            {values?.id ? 'Atualizar' : 'Cadastrar'}
          </Button>
        </View>
      </ViewForm>
    </ScrollView>
  </Container>
);
