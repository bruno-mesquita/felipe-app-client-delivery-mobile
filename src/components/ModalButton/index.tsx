import React from 'react';
import { Text, NativeBase } from 'native-base';

import { Button } from './styles';

interface ModalButtonProps extends NativeBase.Button {
  children: React.ReactNode;
}

const ModalButton = ({ children, ...rest }: ModalButtonProps) => {
  return (
    <Button {...rest}>
      <Text>{children}</Text>
    </Button>
  );
};

export default ModalButton;
