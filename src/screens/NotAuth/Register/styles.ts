import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const { width } = Dimensions.get('screen');

export const BackGround = styled.ImageBackground`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
`;

export const ContainerLogo = styled.View`
  align-items: center;
  margin-top: 50px;
`;

export const Logo = styled.Image`
  height: 119px;
  width: 290px;
`;

export const ContentForm = styled.View`
  align-items: center;
`;

export const SelectContainer = styled.View`
  width: ${width * 0.85}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const SelectContent = styled.View`
  margin: 0px 20px 0px 5px;
`;

export const DivField = styled.View`
  width: ${width * 0.85}px;
  padding: 1px;
  border-radius: 10px;
`;

export const styles = StyleSheet.create({
  select: {
    width: 120,
    height: 43,
    paddingLeft: 8,
    backgroundColor: '#770202',
    color: '#fff',
    borderRadius: 10,
  },
});
