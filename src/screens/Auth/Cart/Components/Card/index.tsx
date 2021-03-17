import React from 'react';
import { View, Text } from 'react-native';

import { RemoveButton } from '../RemoveButton';

import formatNumber from '../../../../../utils/format-number';
import {
  Container,
  Prices,
  Title,
  Content,
  Image,
  Divider,
  Info,
  ViewValues,
  ViewButton,
} from './styles';
import { CardProps } from './props';

export const Card = ({
  total,
  image,
  amount,
  price,
  name,
  itemId,
}: CardProps) => {
  return (
    <Container>
      <Content>
        <Image source={image} resizeMode="cover" />
        <Info>
          <ViewButton>
            <RemoveButton id={itemId} />
          </ViewButton>
          <Title>{name}</Title>
          <ViewValues>
            <View>
              <Text>qtd: {amount}</Text>
            </View>
            <Prices>
              <View>
                <Text>Preço:</Text>
                <Text>Total:</Text>
              </View>
              <View>
                <Text>{formatNumber(price)}</Text>
                <Text>{formatNumber(total)}</Text>
              </View>
            </Prices>
          </ViewValues>
        </Info>
      </Content>
      <Divider />
    </Container>
  );
};
