import { ReactNode } from 'react';

export interface CategoryCardProps {
  name: string;
  children: ReactNode;
  onClick: () => void;
}
