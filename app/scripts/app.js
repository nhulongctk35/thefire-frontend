(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var AppController = function AppController($router) {
    $router.config([{ path: '/home', component: 'home' }, { path: '/management', component: 'management' }, { path: '/', redirectTo: '/home' }]);
};
AppController.$inject = ["$router"];

module.exports = AppController;

angular.module("bstteam", ['ngNewRouter', 'ngSanitize', 'ngCookies', 'bstteam.services', 'bstteam.common', 'toaster', 'ngAnimate']).controller("AppController2", AppController).config( /* @ngInject */["$compileProvider", "$componentLoaderProvider", "$translateProvider", function ($compileProvider, $componentLoaderProvider, $translateProvider) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUEsSUFBSSxnQkFBZ0IsU0FBUyxhQUFULENBQXdCLE9BQXhCLEVBQWlDO0FBQ2pELFlBQVEsTUFBUixDQUFlLENBQ1gsRUFBRSxNQUFNLE9BQVIsRUFBaUIsV0FBVyxNQUE1QixFQURXLEVBRVgsRUFBRSxNQUFNLGFBQVIsRUFBdUIsV0FBVyxZQUFsQyxFQUZXLEVBR1gsRUFBRSxNQUFNLEdBQVIsRUFBYSxZQUFZLE9BQXpCLEVBSFcsQ0FBZjtBQUtILENBTkQ7O0FBUUEsT0FBTyxPQUFQLEdBQWlCLGFBQWpCOztBQUVBLFFBQVEsTUFBUixDQUFlLFNBQWYsRUFBMEIsQ0FDdEIsYUFEc0IsRUFFdEIsWUFGc0IsRUFHdEIsV0FIc0IsRUFJdEIsa0JBSnNCLEVBS3RCLGdCQUxzQixFQU10QixTQU5zQixFQU90QixXQVBzQixDQUExQixFQVNDLFVBVEQsQ0FTWSxnQkFUWixFQVM4QixhQVQ5QixFQVVDLE1BVkQsQyxnQkFVdUIsVUFBQyxnQkFBRCxFQUFtQix3QkFBbkIsRUFBNkMsa0JBQTdDLEVBQW9FOztBQUV6RixxQkFBaUIsZ0JBQWpCLENBQWtDLEtBQWxDOzs7QUFHQSw2QkFBeUIsa0JBQXpCLENBQTRDO0FBQUEsbUNBQTBCLElBQTFCLFNBQWtDLElBQWxDO0FBQUEsS0FBNUM7OztBQUdBLHVCQUNLLHdCQURMLENBQzhCLFVBRDlCLEVBRUssK0JBRkw7QUFHRCxDQXJCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEFwcENvbnRyb2xsZXIgPSBmdW5jdGlvbiBBcHBDb250cm9sbGVyICgkcm91dGVyKSB7XG4gICAgJHJvdXRlci5jb25maWcoW1xuICAgICAgICB7IHBhdGg6ICcvaG9tZScsIGNvbXBvbmVudDogJ2hvbWUnIH0sXG4gICAgICAgIHsgcGF0aDogJy9tYW5hZ2VtZW50JywgY29tcG9uZW50OiAnbWFuYWdlbWVudCcgfSxcbiAgICAgICAgeyBwYXRoOiAnLycsIHJlZGlyZWN0VG86ICcvaG9tZScgfVxuICAgIF0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBDb250cm9sbGVyO1xuXG5hbmd1bGFyLm1vZHVsZShcImJzdHRlYW1cIiwgW1xuICAgICduZ05ld1JvdXRlcicsXG4gICAgJ25nU2FuaXRpemUnLFxuICAgICduZ0Nvb2tpZXMnLFxuICAgICdic3R0ZWFtLnNlcnZpY2VzJyxcbiAgICAnYnN0dGVhbS5jb21tb24nLFxuICAgICd0b2FzdGVyJyxcbiAgICAnbmdBbmltYXRlJ1xuXSlcbi5jb250cm9sbGVyKFwiQXBwQ29udHJvbGxlcjJcIiwgQXBwQ29udHJvbGxlcilcbi5jb25maWcoLyogQG5nSW5qZWN0ICovKCRjb21waWxlUHJvdmlkZXIsICRjb21wb25lbnRMb2FkZXJQcm92aWRlciwgJHRyYW5zbGF0ZVByb3ZpZGVyKSA9PiB7XG4gIC8vIGRpc2FibGVzIEFuZ3VsYXJKUyBkZWJ1ZyBpbmZvXG4gICRjb21waWxlUHJvdmlkZXIuZGVidWdJbmZvRW5hYmxlZChmYWxzZSk7XG5cbiAgLy8gc2V0IHRlbXBsYXRlcyBwYXRoXG4gICRjb21wb25lbnRMb2FkZXJQcm92aWRlci5zZXRUZW1wbGF0ZU1hcHBpbmcobmFtZSA9PiBgYXBwL2NvbXBvbmVudHMvJHtuYW1lfS8ke25hbWV9Lmh0bWxgKTtcblxuICAvLyBBbmd1bGFyIFRyYW5zbGF0ZVxuICAkdHJhbnNsYXRlUHJvdmlkZXJcbiAgICAgIC51c2VTYW5pdGl6ZVZhbHVlU3RyYXRlZ3koJ3Nhbml0aXplJylcbiAgICAgIC51c2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyTG9nKClcbn0pOyJdfQ==
