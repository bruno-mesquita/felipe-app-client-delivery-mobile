import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'; // para usuário de Iphone

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
  height: 1080px;
`;

export const SelectContainer = styled.View`
  width: 290px;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
`;

export const SelectContent = styled.View`
  margin: 0px 20px 0px 5px;
`;

export const DivField = styled.View`
  width: 295px;
  flex-direction: column;
  border-radius: 10px;
`;
