import { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import ExpoFastImage from 'expo-fast-image';
import { Flex, Text } from 'native-base';

import { ModalItem } from '@components';
import formatNumber from '@utils/format-number';
import { ModalBaseHandle } from '../../../../../components/ModalBase/props';
import { Props } from './props';

export const Card = (props: Props) => {
  const modalItemRef = useRef<ModalBaseHandle>(null);

  const openModal = () => modalItemRef.current?.open();

  return (
    <>
      <ModalItem
        modalRef={modalItemRef}
        {...props}
        image={props.photo.encoded}
        description={props.description}
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
          <ExpoFastImage
            style={{
              resizeMode: 'cover',
              height: 80,
              width: 80,
              borderRadius: 9,
            }}
            source={{ uri: props.photo.encoded }}
          />
          <Flex justify="space-between" align="center" p="10px" width="70%">
            <Text fontWeight={600}>{props.name.trim()}</Text>
            <Text>{formatNumber(props.price)}</Text>
          </Flex>
        </Flex>
      </TouchableOpacity>
    </>
  );
};
