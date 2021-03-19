import styled from 'styled-components/native';
import { Button } from 'native-base';

export const Container = styled.View`
  flex: 1;
  margin: 40px 0 40px 0;
  justify-content: center;
  align-items: center;
`;

export const ViewField = styled.View`
  align-items: center;
  width: 90%;
  margin: 10px 0 10px 0;
`;

export const ViewForm = styled.View`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ViewFields = styled.View`
  width: 90%;
  align-items: center;
`;

export const ViewUser = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-around;
`;

export const ViewUserData = styled.View`
  justify-content: space-around;
  align-items: center;
  width: 60%;
`;

export const ButtonAvatar = styled.Button``;

export const UserAvatar = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 100;
`;
