import { useRef, useCallback } from 'react';

import { ModalItem, CardBase } from '@components';
import formatNumber from '@utils/format-number';
import { ModalBaseHandle } from '../../../../../components/ModalBase/props';
import { Props } from './props';
import { Container, ImageProduct, Content, Title, Description, Price } from './styles';

export const Card = (props: Props) => {
  const modalItemRef = useRef<ModalBaseHandle>(null);

  const formattedDescription = (text: string) => {
    if (text.length > 40) {
      return `${text.substring(0, 40)}...`;
    }

    return text;
  };

  const openModal = useCallback(() => {
    modalItemRef.current?.open();
  }, []);

  return (
    <>
      <ModalItem modalRef={modalItemRef} {...props} image={props.photo.encoded} description={props.description} />
      <CardBase style={{ height: 90, width: '90%', alignSelf: 'center' }} onPress={openModal}>
        <Container>
          <ImageProduct style={{ resizeMode: 'cover' }} source={{ uri: props.photo.encoded }} />
          <Content>
            <Title>{props.name.trim()}</Title>
            <Description>{formattedDescription(props.description.trim())}</Description>
            <Price>{formatNumber(props.price)}</Price>
          </Content>
        </Container>
      </CardBase>
    </>
  );
};
