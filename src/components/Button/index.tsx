import React from 'react';
import { Container, ButtonConfig, TextConfig } from './styles';

interface IPropsButton {
  value: string;
}

const Button = (props: IPropsButton) => {
  return (
    <Container>
      <ButtonConfig>
        <TextConfig>{props.value}</TextConfig>
      </ButtonConfig>
    </Container>
  );
};

export { Button };
