import { ReactNode } from 'react';

export interface ItemProps {
  children: ReactNode;
  onPress?: () => void;
  loading?: boolean;
}
