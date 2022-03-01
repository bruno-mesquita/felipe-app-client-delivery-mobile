import useSWR from 'swr';

export type IProduct = Readonly<{
  id: number;
  name: string;
  price: number;
  description: string;
  unit: number;
  unitType: string;
  photo: {
    id: number;
    encoded: string;
  };
}>;

export const useGetProduct = (productId: number, menuId: number) =>
  useSWR<IProduct>(
    productId !== 0 && menuId && `/products/${productId}?menuId=${menuId}`,
    {
      fallbackData: {
        id: 0,
        name: '',
        description: '',
        price: 0,
        unit: 1,
        unitType: 'Un',
        photo: {
          id: 0,
          encoded: '',
        },
      },
    }
  );
