import React from 'react';

import { Label } from '../Label';
import { Input, PropsInput } from '../Input';
import { Container } from './styles';

interface InputLabel extends PropsInput {
  textValue: string;
}

const Field = (props: InputLabel) => {
  return (
    <Container>
      <Label value={props.textValue} />
      <Input {...props} />
    </Container>
  );
};

export { Field };
