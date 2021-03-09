import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width * 0.8}px;
  justify-content: space-around;
  height: 100%;
`;
