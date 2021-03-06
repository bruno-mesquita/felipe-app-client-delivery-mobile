import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  margin: -40px 0 -40px 0;
`;

export const ViewField = styled.View`
  align-items: center;
  width: 90%;
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
