import React from 'react';

import { Container, ContainerTextField, Label, TextField } from './styles';
import { FieldProps } from './props';

export const FieldMask = ({ label, maskRef, ...rest }: FieldProps) => (
  <Container>
    <Label>{label}</Label>
    <ContainerTextField>
      <TextField {...rest} ref={maskRef} />
    </ContainerTextField>
  </Container>
);
