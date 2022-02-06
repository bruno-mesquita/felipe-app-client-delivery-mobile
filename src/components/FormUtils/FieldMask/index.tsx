import { Flex, Factory } from 'native-base';
import { TextInputMask } from 'react-native-masked-text';

import type { FieldProps } from './props';

const InputMask = Factory(TextInputMask);

export const FieldMask = ({ maskRef, ...rest }: FieldProps) => (
  <Flex
    w="100%"
    direction="row"
    justify="space-around"
    align="center"
    rounded="5px"
    bg="#770202"
    pl="10px"
  >
    {maskRef ? (
      <InputMask
        height="43px"
        rounded="10px"
        bg="#770202"
        color="#fff"
        w="100%"
        {...rest}
        ref={maskRef}
      />
    ) : (
      <InputMask
        height="43px"
        rounded="10px"
        bg="#770202"
        color="#fff"
        w="100%"
        {...rest}
      />
    )}
  </Flex>
);
