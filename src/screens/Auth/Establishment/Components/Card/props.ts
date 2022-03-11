export interface CardProps {
  id: number;
  name: string;
  photo: {
    id: number;
    encoded: string;
  };
  price: number;
  onPress: () => void;
  image_id: number;
}
