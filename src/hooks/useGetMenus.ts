import useSWR from 'swr';

type IMenu = Readonly<{
  id: number;
  name: string;
}>;

export const useGetMenus = (establishmentId?: number) => {
  const { data, error } = useSWR<IMenu[]>(
    establishmentId && `/establishments/${establishmentId}/menus`,
    { fallbackData: [] }
  );

  return {
    menus: data,
    isLoading: !error && !data,
    isError: error,
  };
};
