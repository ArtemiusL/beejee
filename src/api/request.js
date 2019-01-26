import axios from 'axios';
import config from '_config';

const BASE_URL = `${config.api}/`;

const universalRequest = (url, params, type, method) => (
  axios({
    method,
    url: `${BASE_URL}${url}`,
    headers: {
      'Content-Type': type,
    },
    data: params,
  }).catch(error => (error.response.data)));

const requestFn = method => (url, params = {}, type = 'multipart/form-data') => universalRequest(url, params, type, method);

export const getRequest = requestFn('get');
export const postRequest = requestFn('post');
