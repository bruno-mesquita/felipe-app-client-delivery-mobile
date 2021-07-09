import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width * 0.9}px;
  justify-content: space-around;
  height: 100%;
`;

export const ButtonCopy = styled.TouchableOpacity`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 10px;
  padding-right: 10px;
`;

export const MyView = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RowView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ColumnView = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Time = styled.Text`
  color: green;
  font-weight: bold;

  margin-bottom: 20px;
`;
