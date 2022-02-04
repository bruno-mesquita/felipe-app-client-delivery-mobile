import { Input, FormControl, Select, Button, useToast } from 'native-base';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';

import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { ModalBase } from '@components';
import api from '@services/api';
import { useAppSelector } from '@store/hooks';
import { NavigationAuthHook } from '@utils/ScreenProps';

import { ModalBaseProps } from '../../../../../components/ModalBase/props';
import { Container, Content, Header } from './styles';
import paymentsOptions from './paymentOptions';
import schema from './schema';
import type { IValues } from './types';
import { useGetAdresses } from '@hooks';

export const FinishModal = ({ modalRef }: ModalBaseProps) => {
  const navigation = useNavigation<NavigationAuthHook<'Cart'>>();
  const { colors } = useTheme();
  const toast = useToast();
  const { establishmentId, items, total } = useAppSelector(({ cart }) => ({
    establishmentId: cart.establishmentId,
    total: cart.total,
    items: cart.items.map(({ image, name, ...rest }) => rest),
  }));

  const { adresses } = useGetAdresses();

  const initialValues: IValues = {
    address_id: '0',
    payment: '',
    transshipment: 0,
    establishment_id: establishmentId,
    note: '',
  };

  const onClose = () => modalRef.current?.close();

  const onSubmit = async (
    values: IValues,
    { setSubmitting }: FormikHelpers<IValues>
  ) => {
    try {
      const { data } = await api.post('/orders', {
        ...values,
        items,
        total,
      });

      navigation.navigate('TrackOrder', { id: data.result, clear: true });
      onClose();
    } catch (err) {
      toast.show({
        w: '90%',
        title: 'Erro',
        description:
          'Erro ao fazer pedido, reveja seus dados e tente novamente',
        status: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
      validationSchema={schema}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        errors,
        touched,
        isSubmitting,
      }) => (
        <ModalBase ref={modalRef}>
          <Container>
            <Header>
              <Ionicons
                onPress={onClose}
                name="close-circle"
                size={20}
                color={colors.primary}
              />
            </Header>
            <Content>
              <FormControl
                isRequired
                isInvalid={!!(errors?.payment && touched?.payment)}
              >
                <FormControl.Label>Pagamento</FormControl.Label>
                <Select
                  placeholder="Meio de pagamento"
                  selectedValue={values.payment}
                  onValueChange={handleChange('payment')}
                >
                  {paymentsOptions.map(({ value, label }) => (
                    <Select.Item key={value} value={value} label={label} />
                  ))}
                </Select>
                <ErrorMessage
                  name="payment"
                  component={FormControl.ErrorMessage}
                />
              </FormControl>

              <FormControl
                mt="10px"
                isRequired
                isInvalid={!!(errors?.address_id && touched?.address_id)}
              >
                <FormControl.Label>Endereço de entrega</FormControl.Label>
                <Select
                  placeholder="Endereço"
                  selectedValue={values.address_id.toString()}
                  onValueChange={handleChange('address_id')}
                >
                  {adresses.map(({ id, nickname }) => (
                    <Select.Item
                      key={id}
                      value={id.toString()}
                      label={nickname}
                    />
                  ))}
                </Select>
                <ErrorMessage
                  name="address_id"
                  component={FormControl.ErrorMessage}
                />
              </FormControl>

              {values.payment === 'Dinheiro' ? (
                <FormControl mt="10px">
                  <FormControl.Label>
                    Troco (se não precisar deixe zerado)
                  </FormControl.Label>
                  <Input
                    type="number"
                    keyboardType="number-pad"
                    value={values.transshipment.toString()}
                    onChangeText={handleChange('transshipment')}
                  />
                  <ErrorMessage
                    name="transshipment"
                    component={FormControl.ErrorMessage}
                  />
                </FormControl>
              ) : null}

              <FormControl mt="10px">
                <FormControl.Label>Observação</FormControl.Label>
                <Input
                  placeholder="Ex: Gostaria de informar que..."
                  value={values.note}
                  onChangeText={handleChange('note')}
                />
                <ErrorMessage
                  name="note"
                  component={FormControl.ErrorMessage}
                />
              </FormControl>

              <Button
                w="70%"
                mt="20px"
                bg="#F8C200"
                _text={{ color: '#fff' }}
                rounded="15px"
                isDisabled={isSubmitting}
                isLoading={isSubmitting}
                onPress={() => handleSubmit()}
              >
                Comprar
              </Button>
            </Content>
          </Container>
        </ModalBase>
      )}
    </Formik>
  );
};
