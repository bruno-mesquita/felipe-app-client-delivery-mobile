import useSWR from 'swr';

export type IImage = Readonly<{
  id: number;
  encoded: string;
}>;

export const useGetImage = (imageId: number) =>
  useSWR<IImage>(imageId && `/images/${imageId}`, {
    fallbackData: {
      id: 0,
      encoded: '',
    },
  });
