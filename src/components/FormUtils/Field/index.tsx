import React from 'react';

import { Container, ContainerTextField, Label, TextField } from './styles';
import { FieldProps } from './props';

export const Field = (props: FieldProps) => (
  <Container>
    <Label>{props.label}</Label>
    <ContainerTextField>
      <TextField {...props} />
    </ContainerTextField>
  </Container>
);
