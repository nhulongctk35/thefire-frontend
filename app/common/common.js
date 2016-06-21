"use strict";

var NavBar = require("./navbar/navbar");

var Common = Angular.module("bstteam", [
    'ui.bootstrap.tpls',
    'ui.bootstrap.modal',
    'ui.bootstrap.dropdown'
])
.directive('navbar', () => new NavBar());