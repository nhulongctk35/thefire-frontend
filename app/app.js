"use strict";

import {service} from './services/services'; // jshint ignore:line
import {common} from './common/common'; // jshint ignore:line
import HomeController from './components/home/home';

var AppController = function AppController ($router) {
    $router.config([
        { path: '/home', component: 'home' },
        { path: '/management', component: 'management' },
        { path: '/', redirectTo: '/home' }
    ]);
};

module.exports = AppController;

angular.module("bstteam", [
    'ngNewRouter',
    'ngSanitize',
    'ngCookies',
    'bstteam.services',
    'bstteam.common',
    'toaster',
    'ngAnimate'
])
.controller("AppController", AppController)
.controller("HomeController", HomeController)
.config(/* @ngInject */($compileProvider, $componentLoaderProvider) => {
  // disables AngularJS debug info
  $compileProvider.debugInfoEnabled(false);

  // set templates path
  $componentLoaderProvider.setTemplateMapping(name => `app/components/${name}/${name}.html`);
});