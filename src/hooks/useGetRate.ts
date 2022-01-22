import useSWR from 'swr';

export type IRate = Readonly<{
  id: number;
  value: number;
  message: string;
}>;

export const useGetRate = (rateId?: number) => {
  const { data, error } = useSWR<IRate>(rateId && `/rates/${rateId}`, {
    fallbackData: {
      id: 0,
      value: 0,
      message: '',
    },
  });

  return {
    rate: data,
    isLoading: !error && !data,
    isError: error,
  };
};
