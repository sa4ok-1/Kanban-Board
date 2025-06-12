import type { AxiosError } from 'axios';

export function handleError(error: unknown) {
  if (error && typeof error === 'object' && 'response' in error) {
    const axiosError = error as AxiosError;
    console.error(
      'API Error:',
      axiosError.response?.status,
      axiosError.message,
    );
  } else if (error instanceof Error) {
    console.error('Unexpected Error:', error.message);
  } else {
    console.error('Unknown error', error);
  }
}
