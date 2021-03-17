import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  pickerAndroid: {
    width: width * 0.7,
    height: 40,
    borderRadius: 11,
    backgroundColor: '#9E0404',
  },
  placeholder: {
    color: '#ffffff',
    paddingLeft: 10,
  },
  iconContainer: {
    padding: 10,
  },
});
