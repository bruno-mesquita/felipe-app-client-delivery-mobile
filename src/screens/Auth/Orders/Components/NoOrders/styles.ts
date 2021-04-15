import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  height: ${height}px;
  width: ${width}px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
`;
