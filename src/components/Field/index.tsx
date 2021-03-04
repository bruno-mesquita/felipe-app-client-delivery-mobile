import React from 'react';

import { Label } from '../Label';
import { Input, PropsInput } from '../Input';
import { Container, IconPassword } from './styles';

import test from '../../assets/images/icons/showPasswordIcon.svg';

interface InputLabel extends PropsInput {
  textValue: string;
}

const Field = (props: InputLabel) => {
  return (
    <Container>
      <IconPassword source={require(test)} />
      <Label value={props.textValue} />
      <Input {...props} />
    </Container>
  );
};

export { Field };
