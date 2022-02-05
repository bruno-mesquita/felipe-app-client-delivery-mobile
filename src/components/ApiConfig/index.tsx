import type { FC } from 'react';
import { AppState } from 'react-native';
import { SWRConfig } from 'swr';
import type { AxiosError } from 'axios';

import { useAppSelector, useAppDispatch } from '@store/hooks';
import { authActions } from '@store/reducers/auth';
import { fetcher } from '@services/api';

export const ApiConfig: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const { signed } = useAppSelector(({ auth }) => auth);

  return (
    <SWRConfig
      value={{
        fetcher,
        onErrorRetry: async (
          error: AxiosError,
          key,
          config,
          revalidate,
          { retryCount }
        ) => {
          // Never retry on 404.
          if (error.response.status === 404) return;

          if (error.response.status === 401 && signed) {
            await dispatch(authActions.fetchRefreshToken()).unwrap();

            revalidate({ retryCount });
          }

          // Only retry up to 10 times.
          if (retryCount >= 10) return;

          // Retry after 5 seconds.
          setTimeout(() => revalidate({ retryCount }), 5000);
        },
        provider: () => new Map(),
        isVisible: () => {
          return true;
        },
        initFocus(callback) {
          let appState = AppState.currentState;

          const onAppStateChange = nextAppState => {
            /* If it's resuming from background or inactive mode to active one */
            if (
              appState.match(/inactive|background/) &&
              nextAppState === 'active'
            ) {
              callback();
            }
            appState = nextAppState;
          };

          // Subscribe to the app state change events
          AppState.addEventListener('change', onAppStateChange);
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};
