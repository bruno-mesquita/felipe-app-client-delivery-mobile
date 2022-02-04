import useSWR from 'swr';

import type { IAddress } from './useGetAddress';

export const useGetAdresses = () => {
  const { data, isValidating, mutate, error } = useSWR<IAddress[]>(
    `/adresses-client`,
    {
      fallbackData: [],
    }
  );

  return {
    adresses: data,
    isLoading: isValidating,
    isError: error,
    mutate,
  };
};
