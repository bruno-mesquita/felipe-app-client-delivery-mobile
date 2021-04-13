import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export default StyleSheet.create({
  inputAndroidContainer: {
    borderRadius: 10,
    backgroundColor: '#770202',
    color: '#ffffff',
    height: 43,
    justifyContent: 'center',
    width: '99%',
  },
  inputAndroid: {
    color: '#C4C4C4',
    paddingLeft: 10,
  },
  placeholder: {
    paddingLeft: 10,
  },
});

export const Container = styled.View`
  height: 69px;
  margin: 4px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-bottom: 5px;
`;
