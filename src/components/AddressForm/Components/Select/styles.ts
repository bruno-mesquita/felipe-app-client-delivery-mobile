import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  pickerAndroid: {
    width: width * 0.4,
    height: 40,
    borderRadius: 11,
    backgroundColor: '#770202',
    color: '#ffffff',
    paddingLeft: 15,
  },
  placeholder: {
    color: '#ffffff',
    paddingLeft: 10,
  },
  iconContainer: {
    padding: 10,
  },
});
