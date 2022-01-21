import { Input, FormControl, Button, Select, ScrollView } from 'native-base';
import { FormikProps, ErrorMessage } from 'formik';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { IAddress } from '@hooks';
import { FieldMask } from '../FormUtils';

import { useGetCities, useGetStates } from '@hooks';

export const AddressForm = ({
  values,
  handleChange,
  handleSubmit,
  isSubmitting,
  errors,
  touched,
}: FormikProps<IAddress>) => {
  const { top } = useSafeAreaInsets();

  const { states } = useGetStates();
  const { cities } = useGetCities(Number(values.state) || null);

  return (
    <ScrollView px="20px" w="100%">
      <FormControl
        mt={top}
        isRequired
        isInvalid={!!(errors?.nickname && touched?.nickname)}
      >
        <FormControl.Label>Nome (Apelido)</FormControl.Label>
        <Input
          value={values.nickname}
          placeholder="nome"
          onChangeText={handleChange('nickname')}
        />
        <ErrorMessage name="nickname" component={FormControl.ErrorMessage} />
      </FormControl>

      <FormControl
        mt="10px"
        isRequired
        isInvalid={!!(errors?.cep && touched?.cep)}
      >
        <FormControl.Label>CEP</FormControl.Label>
        <FieldMask
          type="custom"
          options={{ mask: '99999-999' }}
          value={values.cep}
          placeholder="CEP"
          onChangeText={handleChange('cep')}
        />
        <ErrorMessage name="cep" component={FormControl.ErrorMessage} />
      </FormControl>

      <FormControl
        mt="10px"
        isRequired
        isInvalid={!!(errors?.street && touched?.street)}
      >
        <FormControl.Label>Rua</FormControl.Label>
        <Input
          value={values.street}
          placeholder="Rua"
          onChangeText={handleChange('street')}
        />
        <ErrorMessage name="street" component={FormControl.ErrorMessage} />
      </FormControl>

      <FormControl
        mt="10px"
        isRequired
        isInvalid={!!(errors?.neighborhood && touched?.neighborhood)}
      >
        <FormControl.Label>Bairro</FormControl.Label>
        <Input
          value={values.neighborhood}
          placeholder="Bairro"
          onChangeText={handleChange('neighborhood')}
        />
        <ErrorMessage
          name="neighborhood"
          component={FormControl.ErrorMessage}
        />
      </FormControl>

      <FormControl
        mt="10px"
        isRequired
        isInvalid={!!(errors?.number && touched?.number)}
      >
        <FormControl.Label>Número</FormControl.Label>
        <Input
          value={values.number.toString()}
          placeholder="Número"
          onChangeText={handleChange('number')}
        />
        <ErrorMessage name="number" component={FormControl.ErrorMessage} />
      </FormControl>

      <FormControl
        mt="10px"
        isRequired
        isInvalid={!!(errors?.state && touched?.state)}
      >
        <FormControl.Label>Estado</FormControl.Label>
        <Select
          placeholder="Estado"
          selectedValue={values.state.toString()}
          onValueChange={handleChange('state')}
        >
          {states.map(({ id, name }) => (
            <Select.Item key={id} value={id.toString()} label={name} />
          ))}
        </Select>

        <ErrorMessage name="state" component={FormControl.ErrorMessage} />
      </FormControl>

      <FormControl
        mt="10px"
        isRequired
        isInvalid={!!(errors?.city && touched?.city)}
      >
        <FormControl.Label>Cidade</FormControl.Label>
        <Select
          placeholder="Cidade"
          selectedValue={values.city.toString()}
          onValueChange={handleChange('city')}
        >
          {cities.map(({ id, name }) => (
            <Select.Item key={id} value={id.toString()} label={name} />
          ))}
        </Select>

        <ErrorMessage name="city" component={FormControl.ErrorMessage} />
      </FormControl>
      <Button
        my="20px"
        isLoading={isSubmitting}
        isDisabled={isSubmitting}
        alignSelf="center"
        w="70%"
        variant="inverted"
        onPress={() => handleSubmit()}
      >
        {values?.id ? 'Atualizar' : 'Cadastrar'}
      </Button>
    </ScrollView>
  );
};
