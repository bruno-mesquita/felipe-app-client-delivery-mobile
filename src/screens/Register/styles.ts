import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'; // para usuário de Iphone

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${getStatusBarHeight()}px;
  background-color: #b90000;
`;

export const DivField = styled.View`
  display: flex;
  width: 100px;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #b90000;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled.Text``;

export const Field = styled.TextInput``;
