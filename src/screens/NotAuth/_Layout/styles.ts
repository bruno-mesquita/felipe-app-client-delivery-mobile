import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
`;

export const BackGround = styled.ImageBackground``;

export const ContainerLogo = styled.View`
  align-items: center;
  margin-top: 50px;
`;

export const Logo = styled.Image.attrs(props => ({
  ...props,
  resizeMode: 'contain',
}))`
  height: ${height * 0.2}px;
  width: ${width * 0.8}px;
`;
