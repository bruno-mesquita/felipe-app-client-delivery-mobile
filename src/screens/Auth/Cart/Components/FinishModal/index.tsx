import React, { useState, useEffect, useCallback } from 'react';
import { View, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Item } from 'react-native-picker-select';

import ModalBase from '../../../../../components/ModalBase';
import { ModalBaseProps } from '../../../../../components/ModalBase/props';
import { Field, Select } from '../../../../../components/FormUtils';
import Button from '../../../../../components/ModalButton';
import { Checkbox } from '../Checkbox';

import { Container, Content } from './styles';
import api from '../../../../../services/api';

import paymentsOptions from './paymentOptions';
import schema from './schema';

export const FinishModal = ({ modalRef }: ModalBaseProps) => {
  const navigation = useNavigation();

  const { establishmentId, items, total } = useSelector(({ cart }) => cart);

  const [payments, setPayments] = useState<Item[]>([]);
  const [adresses, setAdresses] = useState<any[]>([]);
  const [options, setOptions] = useState({
    address: '',
    payment: '',
    transshipment: '0',
    invoice: false,
  });

  const getAdresses = useCallback(async () => {
    try {
      const { data } = await api.get('/adresses-client');

      setAdresses(
        data.result.map(item => ({
          label: item.nickname,
          value: item.id,
          city: item.city,
          active: item.active,
        })),
      );

      setOptions(old => ({
        ...old,
        address: data.result.find(item => item.active === true).id,
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

    const currentItem = adresses.find(e => e.value === options.address);

    if (item.city !== currentItem.city) {
      Alert.alert('Você nã pode escolher um endereço de outra cidade');
    } else {
      setOptions(old => ({ ...old, address: value as any }));
    }
  };

  const onClose = useCallback(() => {
    modalRef.current?.close();
  }, []);

  const purchase = async () => {
    try {
      const valid = schema.isValidSync({ ...options, establishmentId });

      if (!valid) throw new Error();

      const { data } = await api.post('/orders', {
        ...options,
        establishmentId,
        items,
        total,
      });

      navigation.navigate('TrackOrder', { id: data.result });
      onClose();
    } catch (err) {
      Alert.alert('Erro ao faze pedido, reveja seus dados e tente novamente');
    }
  };

  return (
    <ModalBase ref={modalRef}>
      <Container>
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
            value={options.address}
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

          <Checkbox
            checked={options.invoice}
            onChange={value => onChange(value, 'invoice')}
          >
            Nota fiscal
          </Checkbox>
          <View>
            <Button onPress={purchase}>Comprar</Button>
          </View>
        </Content>
      </Container>
    </ModalBase>
  );
};
