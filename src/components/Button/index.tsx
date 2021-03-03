import React from 'react';
import { NativeBase } from 'native-base';

import { Container, ButtonConfig, TextConfig } from './styles';

type Props = NativeBase.Button & {
  children: React.ReactNode;
  textColor: string;
  color: string;
};

const Button = (props: Props) => {
  return (
    <Container>
      <ButtonConfig style={{ backgroundColor: props.color }} {...props}>
        <TextConfig style={{ color: props.textColor }}>
          {props.children}
        </TextConfig>
      </ButtonConfig>
    </Container>
  );
};

export { Button };
