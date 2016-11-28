/**
 * # Http
 *
 *
 */
'use string';

require('regenerator/runtime');
import _ from 'lodash';

class Http{
  constructor() {
  this.API_BASE_URL= 'http://localhost:9000';
  }


  async logout() {
    return await this._fetch({
      method: 'GET',
      url: '/logout'
    })
      .then((response) => {
        if ((response.status === 200 || response.status === 201)) {
          return true;
        } else {
          throw(false);
        }
      })
      .catch((error) => {
        throw(error);
      });
  }
  async _fetch(opts) {
    opts = _.extend({
      method: 'GET',
      url: null
    }, opts);

    let reqOpts = {};
    reqOpts.method= opts.method;
    return await fetch(this.API_BASE_URL + opts.url, reqOpts);
  }
};

module.exports = Http;
