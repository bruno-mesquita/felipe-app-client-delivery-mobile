import React from 'react';
import { Text, NativeBase } from 'native-base';

import { Button } from './styles';

interface ModalButtonProps extends NativeBase.Button {
  children: React.ReactNode;
}

export const ModalButton = ({ children, ...rest }: ModalButtonProps) => (
  <Button {...rest}>
    <Text>{children}</Text>
  </Button>
);
