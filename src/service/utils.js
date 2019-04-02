export const extractFileName = url => {
  return url.substring(url.lastIndexOf('/')+1);
};

export const createRequestTypes =(base, optional) => {
  for (let index in optional) {
    optional[index] = base + '_' + index;
  }

  return {
    REQUEST: base + '_REQUEST',
    SUCCESS: base + '_SUCCESS',
    FAILURE: base + '_FAILURE',
    ...optional,
  };
};
