import React, { useRef, useCallback } from 'react';

import { ModalItem, CardBase } from '@components';
import formatNumber from '@utils/format-number';
import { ModalBaseHandle } from '../../../../../components/ModalBase/props';
import { Props } from './props';
import {
  Container,
  ImageProduct,
  Content,
  Title,
  Description,
  Price,
} from './styles';

export const Card = (props: Props) => {
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
        image={props.photo.encoded}
        description={formattedDescription(props.description)}
      />
      <CardBase onPress={openModal}>
        <Container>
          <ImageProduct
            style={{ resizeMode: 'cover' }}
            source={{ uri: props.photo.encoded }}
          />
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
