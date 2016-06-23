(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var AppController = function AppController($router) {
    $router.config([{ path: '/home', component: 'home' }, { path: '/management', component: 'management' }, { path: '/', redirectTo: '/home' }]);
};
AppController.$inject = ["$router"];

module.exports = AppController;

angular.module("bstteam", ['ngNewRouter', 'ngSanitize', 'ngCookies', 'bstteam.services', 'bstteam.common', 'toaster', 'ngAnimate']).controller("AppController", AppController).config( /* @ngInject */["$compileProvider", "$componentLoaderProvider", "$translateProvider", function ($compileProvider, $componentLoaderProvider, $translateProvider) {
    // disables AngularJS debug info
    $compileProvider.debugInfoEnabled(false);

    // set templates path
    $componentLoaderProvider.setTemplateMapping(function (name) {
        return 'app/components/' + name + '/' + name + '.html';
    });

    // Angular Translate
    $translateProvider.useSanitizeValueStrategy('sanitize').useMissingTranslationHandlerLog();
}]);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUEsSUFBSSxnQkFBZ0IsU0FBUyxhQUFULENBQXdCLE9BQXhCLEVBQWlDO0FBQ2pELFlBQVEsTUFBUixDQUFlLENBQ1gsRUFBRSxNQUFNLE9BQVIsRUFBaUIsV0FBVyxNQUE1QixFQURXLEVBRVgsRUFBRSxNQUFNLGFBQVIsRUFBdUIsV0FBVyxZQUFsQyxFQUZXLEVBR1gsRUFBRSxNQUFNLEdBQVIsRUFBYSxZQUFZLE9BQXpCLEVBSFcsQ0FBZjtBQUtILENBTkQ7O0FBUUEsT0FBTyxPQUFQLEdBQWlCLGFBQWpCOztBQUVBLFFBQVEsTUFBUixDQUFlLFNBQWYsRUFBMEIsQ0FDdEIsYUFEc0IsRUFFdEIsWUFGc0IsRUFHdEIsV0FIc0IsRUFJdEIsa0JBSnNCLEVBS3RCLGdCQUxzQixFQU10QixTQU5zQixFQU90QixXQVBzQixDQUExQixFQVNDLFVBVEQsQ0FTWSxlQVRaLEVBUzZCLGFBVDdCLEVBVUMsTUFWRCxDLGdCQVV1QixVQUFDLGdCQUFELEVBQW1CLHdCQUFuQixFQUE2QyxrQkFBN0MsRUFBb0U7O0FBRXpGLHFCQUFpQixnQkFBakIsQ0FBa0MsS0FBbEM7OztBQUdBLDZCQUF5QixrQkFBekIsQ0FBNEM7QUFBQSxtQ0FBMEIsSUFBMUIsU0FBa0MsSUFBbEM7QUFBQSxLQUE1Qzs7O0FBR0EsdUJBQ0ssd0JBREwsQ0FDOEIsVUFEOUIsRUFFSywrQkFGTDtBQUdELENBckJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgQXBwQ29udHJvbGxlciA9IGZ1bmN0aW9uIEFwcENvbnRyb2xsZXIgKCRyb3V0ZXIpIHtcbiAgICAkcm91dGVyLmNvbmZpZyhbXG4gICAgICAgIHsgcGF0aDogJy9ob21lJywgY29tcG9uZW50OiAnaG9tZScgfSxcbiAgICAgICAgeyBwYXRoOiAnL21hbmFnZW1lbnQnLCBjb21wb25lbnQ6ICdtYW5hZ2VtZW50JyB9LFxuICAgICAgICB7IHBhdGg6ICcvJywgcmVkaXJlY3RUbzogJy9ob21lJyB9XG4gICAgXSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcENvbnRyb2xsZXI7XG5cbmFuZ3VsYXIubW9kdWxlKFwiYnN0dGVhbVwiLCBbXG4gICAgJ25nTmV3Um91dGVyJyxcbiAgICAnbmdTYW5pdGl6ZScsXG4gICAgJ25nQ29va2llcycsXG4gICAgJ2JzdHRlYW0uc2VydmljZXMnLFxuICAgICdic3R0ZWFtLmNvbW1vbicsXG4gICAgJ3RvYXN0ZXInLFxuICAgICduZ0FuaW1hdGUnXG5dKVxuLmNvbnRyb2xsZXIoXCJBcHBDb250cm9sbGVyXCIsIEFwcENvbnRyb2xsZXIpXG4uY29uZmlnKC8qIEBuZ0luamVjdCAqLygkY29tcGlsZVByb3ZpZGVyLCAkY29tcG9uZW50TG9hZGVyUHJvdmlkZXIsICR0cmFuc2xhdGVQcm92aWRlcikgPT4ge1xuICAvLyBkaXNhYmxlcyBBbmd1bGFySlMgZGVidWcgaW5mb1xuICAkY29tcGlsZVByb3ZpZGVyLmRlYnVnSW5mb0VuYWJsZWQoZmFsc2UpO1xuXG4gIC8vIHNldCB0ZW1wbGF0ZXMgcGF0aFxuICAkY29tcG9uZW50TG9hZGVyUHJvdmlkZXIuc2V0VGVtcGxhdGVNYXBwaW5nKG5hbWUgPT4gYGFwcC9jb21wb25lbnRzLyR7bmFtZX0vJHtuYW1lfS5odG1sYCk7XG5cbiAgLy8gQW5ndWxhciBUcmFuc2xhdGVcbiAgJHRyYW5zbGF0ZVByb3ZpZGVyXG4gICAgICAudXNlU2FuaXRpemVWYWx1ZVN0cmF0ZWd5KCdzYW5pdGl6ZScpXG4gICAgICAudXNlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlckxvZygpXG59KTsiXX0=
