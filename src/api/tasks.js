import { getRequest, postRequest } from './request';
import config from '_config';

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

