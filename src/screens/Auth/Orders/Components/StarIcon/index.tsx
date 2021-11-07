import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { StarIconProps } from './props';

export const StarIcon = ({ rate }: StarIconProps) => {
  const { colors } = useTheme();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
      <Text>{rate}</Text>
      <MaterialIcons name="star-half" size={20} color={colors.third} />
    </View>
  );
};
