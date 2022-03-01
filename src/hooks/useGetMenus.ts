import useSWR from 'swr';

type IMenu = Readonly<{
  id: number;
  name: string;
}>;

type onSucessFunc = (menus: IMenu[]) => void;

export const useGetMenus = (
  establishmentId?: number,
  onSuccess: onSucessFunc = () => {} // eslint-disable-line
) =>
  useSWR<IMenu[]>(
    establishmentId && `/establishments/${establishmentId}/menus`,
    { fallbackData: [], onSuccess }
  );
