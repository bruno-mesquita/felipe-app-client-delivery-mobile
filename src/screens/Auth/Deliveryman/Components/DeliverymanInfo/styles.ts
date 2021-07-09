import styled from 'styled-components/native';

export const Header = styled.View`
  width: 70%;
  padding: 20px 10px 0px 20px;
  justify-content: space-between;
`;

export const Container = styled.View`
  padding-left: 15px;
  padding-top: 15px;
  width: 100%;
  flex-direction: row;
`;

export const EstablishmentDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 15px;
  align-self: center;
`;

export const EstablishmentDetailInfo = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Flatlists = styled.View`
  justify-content: flex-start;
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
