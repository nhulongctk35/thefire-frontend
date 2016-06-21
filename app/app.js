"use strict";

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
.config(/* @ngInject */($compileProvider, $componentLoaderProvider, $translateProvider) => {
  // disables AngularJS debug info
  $compileProvider.debugInfoEnabled(false);

  // set templates path
  $componentLoaderProvider.setTemplateMapping(name => `app/components/${name}/${name}.html`);

  // Angular Translate
  $translateProvider
      .useSanitizeValueStrategy('sanitize')
      .useMissingTranslationHandlerLog()
});