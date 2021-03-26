import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Item } from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import ModalBase from '../../../../../components/ModalBase';
import Select from '../../../../../components/Select';
import { Field } from '../../../../../components/Field';
import { ModalBaseProps } from '../../../../../components/ModalBase/props';
import Button from '../../../../../components/ModalButton';
import { Checkbox } from '../Checkbox';

import { Container, Header, Content } from './styles';
import api from '../../../../../services/api';

export const FinishModal = ({ modalRef }: ModalBaseProps) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const { addressActive, establishmentId, userId } = useSelector(
    ({ user, cart }) => ({
      addressActive: user.addressActive,
      userId: user.id,
      establishmentId: cart.establishmentId,
    }),
  );

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

      setAdresses(data.result);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getAdresses();
    setPayments([
      { label: 'Dinheiro', value: 'Dinheiro', color: '#000' },
      { label: 'Cartão de crédito', value: 'Cartão de crédito', color: '#000' },
      { label: 'Cartão de débito', value: 'Cartão de débito', color: '#000' },
    ]);
  }, []);

  const onChange = (value: any, name: string) =>
    setOptions(old => ({ ...old, [name]: value }));

  const onClose = useCallback(() => {
    modalRef.current?.close();
  }, []);

  const purchase = () => {
    navigation.navigate('TrackOrder', { id: '' });
    onClose();
  };

  return (
    <ModalBase ref={modalRef}>
      <Container>
        <Content payment={options.payment}>
          <Header>
            <Ionicons
              onPress={onClose}
              name="close-circle"
              size={20}
              color={colors.primary}
            />
          </Header>
          <Select
            items={payments}
            placeholder={{
              value: 'Tipo de pagamento',
              label: 'Tipo de pagamento',
              color: '#000',
            }}
            onValueChange={value => onChange(value, 'payment')}
          />

          <Select
            value={addressActive || adresses[0].id}
            items={adresses.map(item => ({
              label: item.nickname,
              value: item.id,
            }))}
            placeholder={{
              value: 'Endereço',
              label: 'Endereço',
              color: '#000',
            }}
            onValueChange={value => onChange(value, 'address')}
          />

          {options.payment === 'Dinheiro' ? (
            <Field
              textValue="Troco (se não precisar deixe zerado)"
              textColor="#000"
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
