import { useState, useEffect, useCallback } from 'react';
import { View, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Item } from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { ModalBase, ModalButton } from '@components';
import { Field, Select } from '@form';
import api from '@services/api';
import { ModalBaseProps } from '../../../../../components/ModalBase/props';
import { NavigationAuthHook } from '@utils/ScreenProps';

import { Container, Content, Header } from './styles';
import paymentsOptions from './paymentOptions';
import schema from './schema';

export const FinishModal = ({ modalRef }: ModalBaseProps) => {
  const navigation = useNavigation<NavigationAuthHook<'Cart'>>();
  const { colors } = useTheme();


  const { establishmentId, items, total } = useSelector(({ cart }) => cart);

  const [loading, setLoading] = useState(false);
  const [payments, setPayments] = useState<Item[]>([]);
  const [adresses, setAdresses] = useState<any[]>([]);
  const [options, setOptions] = useState({
    address_id: '',
    payment: '',
    transshipment: '0',
    note: '',
  });

  const getAdresses = useCallback(async () => {
    try {
      const { data } = await api.get('/adresses-client');

      setAdresses(
        data.result.map(item => ({
          label: item.nickname,
          value: item.id,
          city: item.city.name,
          active: item.active,
        })),
      );

      setOptions(old => ({
        ...old,
        address_id: data.result.find(item => item.active === true).id,
      }));
    } catch (err) {
      Alert.alert('Erro ao buscar endereços');
      onClose();
    }
  }, []);

  useEffect(() => {
    getAdresses();
    setPayments(paymentsOptions);
  }, []);

  const onChange = (value: any, name: string) =>
    setOptions(old => ({ ...old, [name]: value }));

  const onChangeCity = (value: number) => {
    const item = adresses.find(item => item.value === value);

    const currentItem = adresses.find(e => e.value === options.address_id);

    if (item.city !== currentItem.city) {
      Alert.alert('Você não pode escolher um endereço de outra cidade');
    } else {
      setOptions(old => ({ ...old, address_id: value as any }));
    }
  };

  const onClose = () => modalRef.current?.close();

  const purchase = async () => {
    try {
      setLoading(true);

      const body = {
        ...options,
        address_id: Number(options.address_id),
        payment: options.payment,
        transshipment: Number(options.transshipment),
        establishment_id: establishmentId,
        items,
        total,
      };

      const isValid = schema.isValidSync(body);

      if (!isValid) throw new Error();

      const { data } = await api.post('/orders', {
        ...options,
        establishment_id: establishmentId,
        items,
        total,
      });

      navigation.navigate('TrackOrder', { id: data.result, clear: true });
      onClose();
    } catch (err) {
      Alert.alert(
        'Erro',
        'Erro ao fazer pedido, reveja seus dados e tente novamente',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
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
          <Select
            items={payments}
            placeholder="Tipo de pagamento"
            onChange={value => onChange(value, 'payment')}
            label="Forma de pagamento"
            labelColor="#000"
            value={options.payment}
          />
          <Select
            label="Endereço de entrega"
            labelColor="#000"
            value={options.address_id}
            items={adresses}
            placeholder="Endereço"
            onChange={onChangeCity}
          />

          {options.payment === 'Dinheiro' ? (
            <Field
              label="Troco (se não precisar deixe zerado)"
              labelColor="#000"
              value={options.transshipment}
              onChangeText={value => onChange(value, 'transshipment')}
            />
          ) : null}

          <Field
            label="Observação (campo não obrigatório)"
            placeholder="Ex: Gostaria de informar que..."
            labelColor="#000"
            value={options.note}
            onChangeText={value => onChange(value, 'note')}
          />

          <View style={{ paddingTop: 10 }}>
            <ModalButton disabled={loading} onPress={purchase}>
              Comprar
            </ModalButton>
          </View>
        </Content>
      </Container>
    </ModalBase>
  );
};
