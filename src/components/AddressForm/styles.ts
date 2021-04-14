import { Text } from 'react-native';
import styled from 'styled-components/native';
import { ErrorMessage } from 'formik';

export const Container = styled.View`
  flex: 1;
`;

export const ScrollView = styled.ScrollView.attrs(props => ({
  ...props,
  showsVerticalScrollIndicator: false,
}))`
  margin: -40px 0 -40px 0;
`;

export const ViewField = styled.View`
  align-items: center;
  width: 95%;
`;

export const ViewForm = styled.View`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 5px 0;
`;

export const ViewFields = styled.View`
  width: 90%;
  align-items: center;
`;

export const Error = styled(ErrorMessage).attrs(props => ({
  ...props,
  component: Text,
}))`
  color: #000;
`;
