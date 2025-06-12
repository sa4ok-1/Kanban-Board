import axios from 'axios';
import { API_CONFIG } from '../config';

export const httpClient = axios.create(API_CONFIG);
