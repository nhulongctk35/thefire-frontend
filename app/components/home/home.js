'use strict';

export default class HomeController {
  /* @ngInject */
  constructor($rootScope) { 
    this.$rootScope = $rootScope;
    this.$rootScope.$on('login', (event, cb) => this.login(cb));
    this.$rootScope.$on('logout', (event, cb) => this.logout(cb));
  }

  login() {
    this.isAuthorized = true;
  }

  logout() {
    this.isAuthorized = false;
  }
}