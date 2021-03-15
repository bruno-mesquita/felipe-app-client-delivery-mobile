import React, { useRef } from 'react';

import ModalItem from '../../ModalItem';
import { ModalBaseHandle } from '../../ModalBase/props';
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
import formatNumber from '../../../utils/format-number';

const Card = ({ description, id, image, name, price }: Props) => {
  const modalItemRef = useRef<ModalBaseHandle>(null);

  const formattedDescription = (text: string) => {
    if (text.length > 60) {
      return `${text.substring(0, 60)}...`;
    }

    return text;
  };

  const openModal = () => {
    modalItemRef.current.open();
  };

  return (
    <>
      <ModalItem
        modalRef={modalItemRef}
        id={id}
        name={name}
        image={image}
        price={price}
        description={formattedDescription(description)}
      />
      <CardBase onPress={openModal}>
        <Container>
          <ImageProduct style={{ resizeMode: 'cover' }} source={image} />
          <Content>
            <Title>{name}</Title>
            <Description>{formattedDescription(description)}</Description>
            <Price>{formatNumber(price)}</Price>
          </Content>
        </Container>
      </CardBase>
    </>
  );
};

export default Card;
