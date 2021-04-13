import { Dimensions, Text } from 'react-native';
import styled from 'styled-components/native';
import { ErrorMessage } from 'formik';

const { width } = Dimensions.get('screen');

export const ContentForm = styled.View`
  align-items: center;
`;

export const DivField = styled.View`
  width: ${width * 0.85}px;
  padding: 1px;
  border-radius: 10px;
`;

export const Error = styled(ErrorMessage).attrs(props => ({
  ...props,
  component: Text,
}))`
  color: #fff;
`;
