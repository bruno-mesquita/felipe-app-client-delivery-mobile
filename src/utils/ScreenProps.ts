import { RouteProp, NavigationProp } from '@react-navigation/native';

export type ScreenAuthList = {
  Home: {
    categoryName: string;
  };
  Profile: any;
  Categories: any;
  ChangePassword: any;
  Adresses: any;
  AddAddress: any;
  UpdateAddress: { id: number };
  Establishment: {
    id: number;
    image: string;
    name: string;
    fee: number;
  };
  Cart: any;
  TrackOrder: { id: number; clear?: boolean | undefined };
  Orders: any;
  Configuration: any;
  TermsUse: any;
  AboutApp: any;
  Deliverymans: {
    id: number;
    name: string;
    cellphone: string;
    entry_date: string;
    departure_date: string;
  };
};

export type NavigationAuthHook<R extends keyof ScreenAuthList> = NavigationProp<
  ScreenAuthList,
  R
>;

export type RouteAuthHook<R extends keyof ScreenAuthList> = RouteProp<
  ScreenAuthList,
  R
>;

export interface ScreenAuthProps<R extends keyof ScreenAuthList> {
  route: RouteProp<ScreenAuthList, R>;
  navigation: NavigationProp<ScreenAuthList, R>;
}

export type ScreenNotAuthList = {
  Register: any;
  Login: any;
  CodeToForgotPassword: any;
  CodeToRegister: { id: number };
  CodeToPassword: any;
  ForgotPassword: any;
};

export type NavigationNotAuthHook<
  R extends keyof ScreenNotAuthList
> = NavigationProp<ScreenNotAuthList, R>;

export interface ScreenNotAuthProps<R extends keyof ScreenNotAuthList> {
  route: RouteProp<ScreenNotAuthList, R>;
  navigation: NavigationProp<ScreenNotAuthList, R>;
}
