import axios from 'axios';

import { globals } from '../store/globals';

// Local
export const DOMAIN_URI = 'http://server.EXAMPLE.com';
export const API_URI = '/api/v1/';

export default class Api {
  static methods = {
    GET: 'get',
    POST: 'post',
    PATCH: 'patch',
    PUT: 'put',
    DELETE: 'delete',
  };

  static get initialStatus() {
    return {
      loading: false,
      loaded: false,
      fail: false,
    };
  }

  static get requestStatus() {
    return {
      loading: true,
      loaded: false,
      fail: false,
    };
  }

  static get successStatus() {
    return {
      loading: false,
      loaded: true,
      fail: false,
    };
  }

  static get failStatus() {
    return {
      loading: false,
      loaded: false,
      fail: true,
    };
  }

  static getStaticUrl(url) {
    if (!url) {
      return null;
    }
    if (typeof url === 'string' && url.startsWith('http')) {
      return url;
    }
    return `${DOMAIN_URI}${API_URI}${url}`;
  }

  static composeRouteUrl(route) {
    return `${DOMAIN_URI}${API_URI}${route}`;
  }

  static get(route, params, auth) {
    return Api.request(route, params, undefined, Api.methods.GET, auth);
  }

  static put(route, params, data, auth) {
    return Api.request(route, params, data, Api.methods.PUT, auth);
  }

  static patch(route, params, data, auth) {
    return Api.request(route, params, data, Api.methods.PATCH, auth);
  }

  static post(route, data, auth, appendHeaders) {
    return Api.request(route, undefined, data, Api.methods.POST, auth, appendHeaders);
  }

  static delete(route, params, auth) {
    return Api.request(route, params, undefined, Api.methods.DELETE, auth);
  }

  static request(route, params, data, method, auth = true, appendHeaders) {
    const url = Api.composeRouteUrl(route, params);
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Requested-With': 'XMLHttpRequest',
    };
    if (auth) {
      const token = localStorage.getItem('token');
      headers['Authorization'] = 'Bearer ' + token;
    }

    if (appendHeaders) {
      headers = { ...headers, ...appendHeaders };
    }

    return axios({
      method,
      url,
      headers,
      params,
      data,
    })
      .then(resp => {
        if (!resp.data.status) {
          Api.handleError(resp);

          throw new Error(resp.data.message || 'Unknown Error');
        }
        return resp.data;
      })
      .catch(err => {
        Api.handleError(err);
        throw err;
      });
  }

  static uploadImage(obj) {
    const form = new FormData();
    Object.keys(obj).forEach(i => {
      form.append(i, obj[i]);
    });
    const headers = {
      'Content-Type': 'multipart/form-data',
    };
    return { form, headers };
  }

  static handleError(error) {
    const response = error.response || error;
    let message = response.data && response.data.message ? response.data.message : null;
    let details = '';
    if (response.status === 403) {
      //globals.store.dispatch(AuthActions.logout());
      return;
    }
    if (response.data && response.data.errors && response.data.errors.length) {
      for ( let name in response.data.errors ) {
        if (response.data.errors.hasOwnProperty(name)) {
          details += response.data.errors[name] + '\n';
        }
      }
    }
    if (message) {
      // alert(message, details);
    } else if (response.data && response.data.code) {
      alert(`Error occurred\n\n${response.status} ${response.data.code}`);
    } else {
      alert(`Error occurred\n\n${response.status ? response.status : ''} Unknown server error`);
    }
    if (response.status === 401) {
      //globals.store.dispatch(AuthActions.logout());
    }
  }
}

