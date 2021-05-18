import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width * 0.8}px;
  justify-content: space-around;
  height: 100%;
`;

export const Image = styled.Image`
  height: 65px;
  width: 65px;
  border-radius: 100px;
`;

export const MyView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Time = styled.Text`
  color: green;
  font-weight: bold;
`;
