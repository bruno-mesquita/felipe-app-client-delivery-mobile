import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 60px;
  margin-top: 20px;
`;

// para o scrollView é necessário usar esse .attrs({})
export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true, // vai girar em sentido horizontal
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;
