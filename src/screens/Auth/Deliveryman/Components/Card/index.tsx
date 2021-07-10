import React from 'react';
import { Text } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { CardBase } from '@components';
import { NavigationAuthHook } from '@utils/ScreenProps';

import { DeliverymansProps } from './props';
import {
  Container,
  MyView,
  ColumnView,
  RowView,
  ButtonCopy,
  Time,
} from './styles';
import { Alert } from 'react-native';

export const Card = (props: DeliverymansProps) => {
  const navigation = useNavigation<NavigationAuthHook<'Deliverymans'>>();

  const toStoreDetail = () => {
    navigation.navigate('Deliverymans', {
      id: props.id,
      name: props.name,
      cellphone: props.cellphone,
      entry_date: props.entry_date,
      departure_date: props.departure_date,
    });
  };

  const copyToClipboard = () => {
    Clipboard.setString(props.cellphone);

    Alert.alert(`Número de contato, ${props.name} cópiado!`);
  };

  return (
    <CardBase onPress={toStoreDetail} style={{ height: 90 }}>
      <Container>
        <ButtonCopy onPress={copyToClipboard}>
          <MyView>
            <RowView>
              <MaterialIcons
                name="sports-motorsports"
                size={45}
                color="#9E0404"
              />
              <Text style={{ fontSize: 16 }}>{props.name}</Text>
            </RowView>

            <ColumnView>
              <Time>
                <Text style={{ marginLeft: 5 }}>
                  {`${props.entry_date} - ${props.departure_date}`}
                </Text>
              </Time>

              <RowView>
                <MaterialCommunityIcons name="cellphone" size={25} />
                <Text style={{ marginLeft: 5 }}>{props.cellphone}</Text>
              </RowView>
            </ColumnView>
          </MyView>
        </ButtonCopy>
      </Container>
    </CardBase>
  );
};
