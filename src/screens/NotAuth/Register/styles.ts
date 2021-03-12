import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const BackGround = styled.ImageBackground`
  flex: 1;
`;

export const ContainerLogo = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
  height: 119px;
  width: 290px;
`;

export const ContentForm = styled.View`
  align-items: center;
  height: 1080px;
`;

export const SelectContainer = styled.View`
  width: 290px;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
`;

export const SelectContent = styled.View`
  margin: 0px 20px 0px 5px;
`;

export const DivField = styled.View`
  width: 295px;
  flex-direction: column;
  border-radius: 10px;
`;

export const styles = StyleSheet.create({
  select: {
    width: 120,
    height: 43,
    paddingLeft: 8,
    backgroundColor: '#770202',
    color: '#fff',
    borderRadius: 10,
  },
});
