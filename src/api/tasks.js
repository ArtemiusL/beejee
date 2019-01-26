import Req from './request';
import config from '_config';

export const getTasks = (page, sortField, sortDirection) =>
  Req.GET({
    url: `?developer=${config.developer}${page ? `&page=${page}` : ''}${sortField ? `&sort_field=${sortField}` : ''}${sortDirection ? `&sort_direction=${sortDirection}` : ''}`,
  });
