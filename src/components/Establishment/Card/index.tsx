import React, { useRef, useCallback } from 'react';

import ModalItem from '../../ModalItem';
import { ModalBaseHandle } from '../../ModalBase/props';
import { CardBase } from '../../CardBase';
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

const Card = (props: Props) => {
  const modalItemRef = useRef<ModalBaseHandle>(null);

  const formattedDescription = (text: string) => {
    if (text.length > 60) {
      return `${text.substring(0, 60)}...`;
    }

    return text;
  };

  const openModal = useCallback(() => {
    modalItemRef.current?.open();
  }, []);

  return (
    <>
      <ModalItem
        modalRef={modalItemRef}
        {...props}
        description={formattedDescription(props.description)}
      />
      <CardBase onPress={openModal}>
        <Container>
          <ImageProduct style={{ resizeMode: 'cover' }} source={props.image} />
          <Content>
            <Title>{props.name}</Title>
            <Description>{formattedDescription(props.description)}</Description>
            <Price>{formatNumber(props.price)}</Price>
          </Content>
        </Container>
      </CardBase>
    </>
  );
};

export default Card;
