export interface Establishment {
  id: number;
  name: string;
  image: {
    encoded: string;
  };
  openingTime: number;
  closingTime: number;
  freightValue: number;
}
