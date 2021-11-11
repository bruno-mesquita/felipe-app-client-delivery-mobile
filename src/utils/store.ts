import * as SecureStore from 'expo-secure-store';

const FLIPP_AUTH_TOKEN = 'flipp-auth-token';
const FLIPP_AUTH_REFRESH_TOKEN = 'flipp-auth-refresh-token';
const FLIPP_CART_ID = 'flipp-cart-id';

export const getToken = () => SecureStore.getItemAsync(FLIPP_AUTH_TOKEN);
export const setToken = (token: string) => SecureStore.setItemAsync(FLIPP_AUTH_TOKEN, token);
export const removeToken = () => SecureStore.deleteItemAsync(FLIPP_AUTH_TOKEN);

export const getRefreshToken = () => SecureStore.getItemAsync(FLIPP_AUTH_REFRESH_TOKEN);
export const setRefreshToken = (token: string) => SecureStore.setItemAsync(FLIPP_AUTH_REFRESH_TOKEN, token);
export const removeRefreshToken = () => SecureStore.deleteItemAsync(FLIPP_AUTH_REFRESH_TOKEN);

export const getCartId = () => SecureStore.getItemAsync(FLIPP_CART_ID);
export const setCartId = (token: string) => SecureStore.setItemAsync(FLIPP_CART_ID, token);
