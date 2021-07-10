import React from 'react';
import { Text, IButtonProps } from 'native-base';

import { Button } from './styles';

interface ModalButtonProps extends IButtonProps {
  children: React.ReactNode;
}

export const ModalButton = ({ children, ...rest }: ModalButtonProps) => (
  <Button {...rest}>
    <Text>{children}</Text>
  </Button>
);
