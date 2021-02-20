export const requestLogin = (email: string, password: string) => ({
  type: '@auth/REQUEST_LOGIN',
  payload: { email, password },
});

export const requestLoginSuccess = (user: any, token: string) => ({
  type: '@auth/REQUEST_LOGIN_SUCCESS',
  payload: { user, token },
});

export const requestLoginFailure = (errorMessage: string) => ({
  type: '@auth/REQUEST_LOGIN_FAILURE',
  payload: { errorMessage },
});

export const logout = () => ({
  type: '@auth/LOGOUT',
});
