export interface SelectProps {
  path: string;
  value: string;
  onChange: (value: any) => void;
  placeholder?: string;
  label: string;
  labelColor?: string | undefined;
}
