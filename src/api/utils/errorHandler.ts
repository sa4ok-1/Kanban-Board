import type { AxiosError } from 'axios';

interface ErrorResponse {
  message?: string;
  [key: string]: unknown;
}

export function handleError(error: unknown): {
  message: string;
  status?: number;
} {
  if (isAxiosError(error)) {
    const { response, message } = error;
    const status = response?.status;
    const serverMessage = (response?.data as ErrorResponse)?.message;

    console.error('API Error:', status, message);

    return {
      message: serverMessage ?? 'API request failed',
      status,
    };
  }

  if (error instanceof Error) {
    console.error('Unexpected Error:', error.message);
    return { message: error.message };
  }

  console.error('Unknown error', error);
  return { message: 'An unknown error occurred' };
}

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError)?.isAxiosError === true;
}
