import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width * 0.8}px;
  height: ${height * 0.15}px;
  justify-content: space-around;
  align-items: center;
  padding: 0px 15px 0px 15px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${width * 0.7}px;
`;
