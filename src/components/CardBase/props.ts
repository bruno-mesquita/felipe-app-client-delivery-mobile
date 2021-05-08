import { StyleProp, ViewStyle } from 'react-native';
import { Props as DefaultProps } from '../../utils/props';

export interface Props extends DefaultProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}
