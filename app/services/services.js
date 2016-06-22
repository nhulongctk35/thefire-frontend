"use strict";

var AccountService = require("./account.service");

var Services = angular
    .module("bstteam.services", [])
    .service('AccountService', AccountService);

module.exports = Services;