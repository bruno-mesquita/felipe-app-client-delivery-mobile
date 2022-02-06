import type { StyledProps } from 'native-base';
import type { PlatformProps } from 'native-base/lib/typescript/components/types';
import type { TextInputMaskProps } from 'react-native-masked-text';

type Input = TextInputMaskProps & StyledProps & PlatformProps<StyledProps>;

export interface FieldProps extends Omit<Input, 'children'> {
  maskRef?: any;
}
