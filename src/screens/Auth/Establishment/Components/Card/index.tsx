import { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { Flex, Text } from 'native-base';

import { ModalItem, FastImage } from '@components';
import formatNumber from '@utils/format-number';
import { ModalBaseHandle } from '../../../../../components/ModalBase/props';
import { Props } from './props';

export const Card = ({ photo, name, price, description, ...rest }: Props) => {
  const modalItemRef = useRef<ModalBaseHandle>(null);

  const openModal = () => modalItemRef.current?.open();

  return (
    <>
      <ModalItem
        modalRef={modalItemRef}
        {...rest}
        name={name}
        price={price}
        image={photo.encoded}
        description={description}
      />
      <TouchableOpacity onPress={openModal}>
        <Flex
          mx="20px"
          flexDirection="row"
          shadow={1}
          mb="20px"
          bg="#fff"
          rounded="10px"
        >
          <FastImage
            resizeMode="contain"
            size="80px"
            rounded="9px"
            source={{ uri: photo.encoded }}
            cacheKey={rest.id.toString()}
          />
          <Flex justify="space-between" align="center" p="10px" width="70%">
            <Text fontWeight={600}>{name.trim()}</Text>
            <Text>{formatNumber(price)}</Text>
          </Flex>
        </Flex>
      </TouchableOpacity>
    </>
  );
};
