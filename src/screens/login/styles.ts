import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'; // para usuário de Iphone

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding-top: ${getStatusBarHeight()}px;
  background-color: #b90000;
  color: #fff;
`;

export const Content = styled.View`
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
  width: 100%;
  align-items: center;
  margin-top: 20%;
`;

export const Input = styled.TextInput`
  background-color: #770202;
  color: #fff;
  border-radius: 8px;
  font-size: 14px;

  height: 50px;
  width: 80%;

  padding-left: 10px;
  margin-bottom: 10px;
`;

export const ForgotPassword = styled.View`
  height: 80px;
  width: 100%;
  align-items: flex-end;
  margin-top: 10px;
`;

export const ForgotPasswordBotton = styled.TouchableOpacity`
  margin-right: 45px;
`;

export const ForgotPasswordText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const ContainerBotton = styled.View`
  width: 100%;
  align-items: center;
`;

export const LoginBotton = styled.TouchableOpacity`
  background-color: #fff;
  width: 50%;
  border-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;

  justify-content: center;
  align-items: center;
  padding: 4px;
  margin-bottom: 14px;
`;

export const LoginBottonText = styled.Text`
  color: #b90000;
  font-size: 28px;
`;
