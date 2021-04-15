export interface Props {
  name: string;
  id: number;
  selected: number;
  onPress: (id: number) => void;
}
