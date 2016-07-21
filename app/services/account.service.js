"use strict";

/** @class AccountService
 * @desc This is an sample was created to demo the way we call API, 
 * I will remove this comment in the next time.
 * @param {$http} - The $http's used to call API
 */
export default class AccountService {
  constructor($http) {
    this.$http = $http;
  }

  authen() {
    return this.$http({
      method: 'GET',
      url: 'api/authenticate',
      headers: {'Accept': '*/*', 'x-auth-token': token}
    });
  };

  login() {
    var loginData = {
      'username': userpass.username,
      'password': userpass.password
    };
    return this.$http.post('api/login', loginData);
  };

  logout() {
    var token = this.cacheService.get('loginUser');
    return this.$http({
      method: 'POST',
      url: 'api/logout',
      headers: {'Accept': '*/*', 'x-auth-token': token}
    });
  }

};

module.exports = AccountService;