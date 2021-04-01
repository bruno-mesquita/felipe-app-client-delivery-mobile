import React from 'react';
import { NativeBase } from 'native-base';

import { Container, ContainerTextField, Label, TextField } from './styles';

interface FieldProps extends NativeBase.Input {
  textValue: string;
  textColor?: string;
}

export const Field = (props: FieldProps) => (
  <Container>
    <Label style={{ color: props.textColor || '#FFFFFF' }}>
      {props.textValue}
    </Label>
    <ContainerTextField>
      <TextField {...props} />
    </ContainerTextField>
  </Container>
);
