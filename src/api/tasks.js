import { getRequest, postRequest } from './request';
import config from '_config';
import md5Hash from 'crypto-js/md5';

export const getTasks = (page, sortField, sortDirection) =>
  getRequest(
    `?developer=${config.developer}${page ? `&page=${page}` : ''}${sortField ? `&sort_field=${sortField}` : ''}${sortDirection ? `&sort_direction=${sortDirection}` : ''}`,
  );

export const createTask = (formData) => {
  const data = new FormData();
  Object.keys(formData).forEach((item) => {
    data.append(item, formData[item]);
  });

  return postRequest(
    `create/?developer=${config.developer}`,
    data,
  );
};

const generateRequestBodyForEdit = (obj) => {
  const sortedKeys = Object.keys(obj).sort();
  let myString = '';
  let isFirstItem = false;

  sortedKeys.forEach((item) => {
    if (obj[item] !== undefined) {
      myString += `${isFirstItem ? '&' : ''}${item}=${obj[item]}`;

      isFirstItem = true;
    }
  });

  return myString;
};

export const editTask = ({ id, status, text }) => {
  const token = 'beejee';
  const bodyRequest = generateRequestBodyForEdit({
    text, status, token,
  });

  const urlCodeStr = encodeURI(bodyRequest);

  const signature = md5Hash(urlCodeStr).toString();

  const formData = {
    status,
    text,
    token,
    signature,
  };

  const data = new FormData();
  Object.keys(formData).forEach((item) => {
    if (formData[item] !== undefined) {
      data.append(item, formData[item]);
    }
  });

  return postRequest(
    `edit/${id}/?developer=${config.developer}`,
    data,
  );
};

