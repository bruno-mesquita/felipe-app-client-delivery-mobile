import React from 'react';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';

export const Select = (props: PickerSelectProps) => {
  return (
    <RNPickerSelect
      style={{
        inputAndroid: styles.pickerAndroid,
        placeholder: styles.placeholder,
        iconContainer: styles.iconContainer,
      }}
      Icon={() => (
        <MaterialIcons name="keyboard-arrow-down" color="#ffffff" size={22} />
      )}
      useNativeAndroidPickerStyle={false}
      {...props}
    />
  );
};
