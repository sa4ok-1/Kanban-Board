import { httpClient } from '../httpClient';
import { handleError } from '../../utils/errorHandler';

export async function getTasks(signal?: AbortSignal) {
  try {
    const response = await httpClient.get('/task', { signal });
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
}
