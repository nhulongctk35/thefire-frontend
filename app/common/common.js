"use strict";

var NavBar = require("./navbar/navbar");

var Common = Angular.module("bstteam.common", [
    'ui.bootstrap.tpls',
    'ui.bootstrap.modal',
    'ui.bootstrap.dropdown'
])
.directive('navbar', () => new NavBar());

module.exports = Common;