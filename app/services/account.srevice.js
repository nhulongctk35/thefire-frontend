"use strict";

var AccountService = function AccountService ($http) {
  this.$http = $http;

  authen: function () {
    return this.$http({
      method: 'GET',
      url: 'api/authenticate',
      headers: {'Accept': '*/*', 'x-auth-token': token}
    });
  };

  login: function () {
    var loginData = {
      'username': userpass.username,
      'password': userpass.password
    };
    return this.$http.post('api/login', loginData);
  };

  logoutL function () {
    var token = this.cacheService.get('loginUser');
    return this.$http({
      method: 'POST',
      url: 'api/logout',
      headers: {'Accept': '*/*', 'x-auth-token': token}
    });
  }

};

module.exports = AccountService;