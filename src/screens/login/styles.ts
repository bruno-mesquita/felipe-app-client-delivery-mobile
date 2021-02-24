import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'; // para usuário de Iphone
import { Input as NBInput, Item as NBItem, Button, Text } from 'native-base';

export const Item = styled(NBItem)`
  margin-top: 25px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding-top: ${getStatusBarHeight()}px;
  background-color: #b90000;
  color: #fff;
`;

export const Form = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerLogo = styled.View`
  align-items: center;
  margin-bottom: 10%;
`;

export const Logo = styled.Image``;

export const LogoTestText = styled.Text`
  color: #fff;
  font-size: 28px;
`;

export const ContainerInput = styled.View`
  width: 90%;
  align-items: center;
  margin-top: 10%;
`;

export const Input = styled(NBInput).attrs(props => ({
  placeholderTextColor: '#fff',
  ...props,
}))`
  background-color: #770202;
  color: #fff;
  border-radius: 25px;
`;

export const ForgotPassword = styled.View`
  height: 80px;
  width: 100%;
  align-items: flex-end;
  margin-top: 10px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-right: 45px;
`;

export const ForgotPasswordText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const ContainerButton = styled.View`
  width: 100%;
  align-items: center;
`;

export const LoginButton = styled(Button)`
  background-color: #fff;
  border-radius: 11px;
  width: 50%;
  align-self: center;
  margin-bottom: 14px;
  justify-content: center;
  align-items: center;
`;

export const LoginButtonText = styled(Text)`
  color: #b90000;
  font-size: 17px;
  font-weight: bold;
`;
