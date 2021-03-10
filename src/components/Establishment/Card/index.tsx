import React from 'react';
import { useNavigation } from '@react-navigation/native';

import CardBase from '../../CardBase';
import { Props } from './props';
import {
  Container,
  ImageProduct,
  Content,
  Title,
  Description,
  Price,
} from './styles';

const Card = ({ description, id, image, name, price }: Props) => {
  const navigation = useNavigation();

  const openModal = () => {};

  const formattedDescription = (text: string) => {
    if (text.length > 60) {
      return `${text.substring(0, 60)}...`;
    }

    return text;
  };

  return (
    <CardBase onPress={openModal}>
      <Container>
        <ImageProduct style={{ resizeMode: 'cover' }} source={image} />
        <Content>
          <Title>{name}</Title>
          <Description>{formattedDescription(description)}</Description>
          <Price>R${price}</Price>
        </Content>
      </Container>
    </CardBase>
  );
};

export default Card;
