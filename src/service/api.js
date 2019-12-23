import axios from 'axios';
import { globals } from '../store/globals';
import { showAlert } from '../store/alert/alertActions';
import {splitStringMainLetter} from '../helpers';
import { DOMAIN_URI, API_URI } from './apiConstants';
// Local

export default class Api {
  static methods = {
    GET: 'get',
    POST: 'post',
    PATCH: 'patch',
    PUT: 'put',
    DELETE: 'delete',
  };

  static actionsStack = [];

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
    if (route.startsWith('http')) {
      return route;
    }
    return `${DOMAIN_URI}${API_URI}${route}`;
  }

  static get(route, params) {
    return Api.request(route, params, undefined, Api.methods.GET);
  }

  static put(route, params, data) {
    return Api.request(route, params, data, Api.methods.PUT);
  }

  static patch(route, params, data) {
    return Api.request(route, params, data, Api.methods.PATCH);
  }

  static post(route, data, appendHeaders) {
    return Api.request(route, undefined, data, Api.methods.POST, appendHeaders);
  }

  static delete(route, params) {
    return Api.request(route, params, undefined, Api.methods.DELETE);
  }

  static alert(msg) {
    if (typeof msg === 'string') {
      globals.store.dispatch(showAlert({
        title: 'Notification',
        msg: msg,
      }));
    } else if (typeof msg === 'object' && msg.title && msg.text ) {
      globals.store.dispatch(showAlert({
        title: msg.title,
        msg: msg.text,
      }));
    }
  }

  static uploadImage(url, method, image) {
    const form = new FormData();
    form.append('image', image, 'here_can_be_static_name.jpg');
    let headers = {
      'Content-Type': 'multipart/form-data',
    };
    //const token = Auth.getTokenFromLocalStorage();
    const token = 'token';
    if (token) {
      headers['Authorization'] = 'Bearer ' + token.access_token;
    }
    return axios({
      method,
      url: Api.composeRouteUrl(url),
      headers,
      data: form,
    }).then(resp => {
      return resp.data;
    }).catch(err => {
      Api.handleError(err);
      throw err;
    });
  }

  static request(route, params, data, method, appendHeaders) {
    const url = Api.composeRouteUrl(route, params);
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Requested-With': 'XMLHttpRequest',
    };
    // const token = Auth.getTokenFromLocalStorage();
    const token = '';
    if (token) {
      headers['Authorization'] = 'Bearer ' + token.access_token;
    }

    if (appendHeaders) {
      headers = {...headers, ...appendHeaders};
    }

    return axios({
      method,
      url,
      headers,
      params,
      data,
    })
      .then(resp => {
        return resp.data;
      })
      .catch(err => {
        Api.handleError(err);
        throw err;
      });
  }

  static handleError(error) {
    const response = error.response || error;
    let message = response.data && response.data.msg;

    let details = '';

    if (response.data && response.data.errors && Object.keys(response.data.errors).length) {
      for ( let name in response.data.errors ) {
        details += `${splitStringMainLetter(name + '', '_')}: ${response.data.errors[name]}\n`;

      }
    }
    if (message) {
      Api.alert({
        title: 'Error',
        text: details || typeof message === 'object' ? message.text : message,
      });
    }

    console.log(`Error occurred\\n${response.status} ${response.data.code}`); //eslint-disable-line
  }
}
