import axios from 'axios';
import { environment } from '../../environment';

let jwt = '';

export const originClient = axios.create({
  baseURL: environment.originContext,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Create interceptor to add the token into the header for every request
originClient.interceptors.request.use((config) => {
  config.headers.Authorization = jwt
  return config;
});

export function refreshJwt(newJwt: string) {
  jwt = newJwt;
}
