import { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Props } from './props';
import { styles } from './styles';

export const Tab = ({ id, name, selected, onPress }: Props) => {
  const { colors } = useTheme();
  const [color, setColor] = useState({
    container: colors.secundary,
    text: '#000',
  });

  useEffect(() => {
    if (selected === id) {
      setColor({ container: colors.primary, text: colors.secundary });
    } else {
      setColor({ container: colors.secundary, text: '#000' });
    }
  }, [selected]);

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={colors.primary}
      onPress={() => {
        onPress(id);
      }}
      style={{ ...styles.container, backgroundColor: color.container }}
    >
      <View>
        <Text style={{ color: color.text }}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
};
