"use strict";

import NavBar from './navbar/navbar';

var Common = angular.module("bstteam.common", [
    'ui.bootstrap.tpls',
    'ui.bootstrap.modal',
    'ui.bootstrap.dropdown'
])
.directive('navbar', () => new NavBar());

module.exports = Common;