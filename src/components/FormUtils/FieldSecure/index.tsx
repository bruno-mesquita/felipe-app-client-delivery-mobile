import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { ContainerTextField, TextField } from './styles';
import { FieldProps } from './props';

export const FieldSecure = (props: FieldProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <ContainerTextField>
      <TextField {...props} secureTextEntry={!visible} />
      <TouchableOpacity onPress={() => setVisible(old => !old)}>
        {visible ? (
          <Ionicons name="eye-off" size={30} color="#fff" />
        ) : (
          <Ionicons name="eye" size={30} color="#fff" />
        )}
      </TouchableOpacity>
    </ContainerTextField>
  );
};
