import { useEffect, useState } from 'react';

import api from '@services/api';

export const useUser = (selects = []) => {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    if(selects.length > 0) {
      api.post('/clients/me', { selects })
        .then(({ data }) => setUser(data.result))
        .catch(() => setUser({ active: false }));
    };
  }, []);

  return user;
};
