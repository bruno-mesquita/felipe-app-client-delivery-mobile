import { AxiosError } from 'axios';

export interface ApiResult<T> {
  err: boolean;
  result: T;
}

export type ApiError = AxiosError<{ err: string }>;
