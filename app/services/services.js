"use strict";

var AccountService = require("./account.service");

var services = angular
    .module("bstteam.services", [])
    .service('AccountService', AccountService);