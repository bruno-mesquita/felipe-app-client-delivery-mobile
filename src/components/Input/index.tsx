import React from 'react';
import { NativeBase } from 'native-base';

import { TextField } from './styles';

export type PropsInput = NativeBase.Input;

export const Input = (props: PropsInput) => {
  return (
    <>
      <TextField {...props} />
    </>
  );
};
