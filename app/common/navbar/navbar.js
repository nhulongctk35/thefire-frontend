'use strict';

export default class NavBar {
  /* @ngInject */
  constructor() {
    return {
      replace: false,
      templateUrl: 'app/common/navbar/navbar.html'
    };
  }
}