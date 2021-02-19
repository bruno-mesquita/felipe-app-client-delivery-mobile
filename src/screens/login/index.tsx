import React from 'react';

import {
  Container,
  Content,
  ContainerLogo,
  LogoTestText,
  ContainerBotton,
  ContainerInput,
  Input,
  ForgotPassword,
  ForgotPasswordBotton,
  ForgotPasswordText,
  LoginBotton,
  LoginBottonText,
} from './styles';

function login(): JSX.Element {
  return (
    <Container>
      <ContainerLogo>
        <LogoTestText>FLIPP</LogoTestText>
        <LogoTestText>Delivery</LogoTestText>
      </ContainerLogo>

      <Content>
        <ContainerInput>
          <Input />
          <Input />
        </ContainerInput>

        <ForgotPassword>
          <ForgotPasswordBotton>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPasswordBotton>
        </ForgotPassword>

        <ContainerBotton>
          <LoginBotton>
            <LoginBottonText>Login</LoginBottonText>
          </LoginBotton>

          <LoginBotton>
            <LoginBottonText>Criar conta</LoginBottonText>
          </LoginBotton>
        </ContainerBotton>
      </Content>
    </Container>
  );
}

export default login;
