export interface Props {
  name: string;
  id: string;
  selected: string;
  onPress: (id: string) => void;
}
