import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import { useTheme } from 'styled-components/native';

import { Props } from './props';
import { styles } from './styles';

const Tab = ({ loading, id, name, selected, onPress }: Props) => {
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
        {loading ? (
          <ActivityIndicator color={colors.primary} size={25} />
        ) : (
          <Text style={{ color: color.text }}>{name}</Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default Tab;
