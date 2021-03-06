import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'; // para usuário de Iphone
import RNPickerSelect from 'react-native-picker-select';

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
  background-color: #b90000;
`;

export const BackGround = styled.ImageBackground`
  flex: 1;
`;

export const ContainerLogo = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
  height: 119px;
  width: 290px;
`;

export const ContentForm = styled.View`
  align-items: center;
`;

export const SelectContainer = styled.View`
  width: 290px;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const SelectContent = styled.View`
  margin: 0px 20px 0px 5px;
`;

export const DivField = styled.View`
  width: 295px;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
