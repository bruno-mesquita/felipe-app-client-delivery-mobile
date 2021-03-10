export interface Props {
  name: string;
  id: string;
  loading: boolean;
  selected: string;
  onPress: (id: string) => void;
}
