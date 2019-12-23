import { globals } from '../store/globals';

export const trimFieldsData = data => {
  const newData = {};
  for (let field in data) {
    if (typeof data[field] === 'string') {
      newData[field] = data[field].trim();
    } else {
      newData[field] = data[field];
    }
  }
  return newData;
};

export const mobileAndTabletCheck = () => {
  if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ){
    return true;
  } else {
    return false;
  }
};

export const getUrlParam = index => {
  if (globals) {
    const arr = globals.history.location.pathname.split('/');
    return arr[index];
  }
  return null;
};

export const filterActionsForRequest = actionType => {
  const isRequestAction = actionType.includes('REQUEST');
  if (isRequestAction) {
    const isNoToken = actionType.includes('TOKEN');
    if (!isNoToken) {
      return actionType;
    }
    return null;
  }
  return null;
};

export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const splitStringMainLetter = (str, separator = '_') => {
  const arr = str.split(separator);
  arr.forEach((word, index) => {
    arr[index] = word[0].toUpperCase() + word.slice(1);
  });
  return arr.join(' ');
};


export const generateHash = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
