import { useEffect, useState } from 'react';

import { getApi } from '@services/api';

export const useUser = (selects = []) => {
  const api = getApi();

  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await api.post('/clients/me', { selects });

        setUser(data.result);
      } catch (err) {
        setUser({ active: false });
      }
    }

    if(selects.length > 0) getUser();
  }, []);

  return user;
};
