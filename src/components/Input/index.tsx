import * as React from 'react';
import { NativeBase } from 'native-base';

import { Container, TextField, PasswordButton, PasswordIcon } from './styles';

export type PropsInput = NativeBase.Input & {
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
};

export const Input = (props: PropsInput) => {
  return (
    <Container>
      <TextField {...props} />
      <PasswordButton>
        <PasswordIcon
          name={props.iconName}
          size={props.iconSize}
          color={props.iconColor}
        />
      </PasswordButton>
    </Container>
  );
};
