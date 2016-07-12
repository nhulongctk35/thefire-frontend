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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQUksZ0JBQWdCLFNBQVMsYUFBVCxDQUF3QixPQUF4QixFQUFpQztBQUNqRCxZQUFRLE1BQVIsQ0FBZSxDQUNYLEVBQUUsTUFBTSxPQUFSLEVBQWlCLFdBQVcsTUFBNUIsRUFEVyxFQUVYLEVBQUUsTUFBTSxhQUFSLEVBQXVCLFdBQVcsWUFBbEMsRUFGVyxFQUdYLEVBQUUsTUFBTSxHQUFSLEVBQWEsWUFBWSxPQUF6QixFQUhXLENBQWY7QUFLSCxDQU5EOztBQVFBLE9BQU8sT0FBUCxHQUFpQixhQUFqQjs7QUFFQSxRQUFRLE1BQVIsQ0FBZSxTQUFmLEVBQTBCLENBQ3RCLGFBRHNCLEVBRXRCLFlBRnNCLEVBR3RCLFdBSHNCLEVBSXRCLGtCQUpzQixFQUt0QixnQkFMc0IsRUFNdEIsU0FOc0IsRUFPdEIsV0FQc0IsQ0FBMUIsRUFTQyxVQVRELENBU1ksZUFUWixFQVM2QixhQVQ3QixFQVVDLE1BVkQsQyxnQkFVdUIsVUFBQyxnQkFBRCxFQUFtQix3QkFBbkIsRUFBNkMsa0JBQTdDLEVBQW9FOztBQUV6RixxQkFBaUIsZ0JBQWpCLENBQWtDLEtBQWxDOzs7QUFHQSw2QkFBeUIsa0JBQXpCLENBQTRDO0FBQUEsbUNBQTBCLElBQTFCLFNBQWtDLElBQWxDO0FBQUEsS0FBNUM7OztBQUdBLHVCQUNLLHdCQURMLENBQzhCLFVBRDlCLEVBRUssK0JBRkw7QUFHRCxDQXJCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBBcHBDb250cm9sbGVyID0gZnVuY3Rpb24gQXBwQ29udHJvbGxlciAoJHJvdXRlcikge1xyXG4gICAgJHJvdXRlci5jb25maWcoW1xyXG4gICAgICAgIHsgcGF0aDogJy9ob21lJywgY29tcG9uZW50OiAnaG9tZScgfSxcclxuICAgICAgICB7IHBhdGg6ICcvbWFuYWdlbWVudCcsIGNvbXBvbmVudDogJ21hbmFnZW1lbnQnIH0sXHJcbiAgICAgICAgeyBwYXRoOiAnLycsIHJlZGlyZWN0VG86ICcvaG9tZScgfVxyXG4gICAgXSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFwcENvbnRyb2xsZXI7XHJcblxyXG5hbmd1bGFyLm1vZHVsZShcImJzdHRlYW1cIiwgW1xyXG4gICAgJ25nTmV3Um91dGVyJyxcclxuICAgICduZ1Nhbml0aXplJyxcclxuICAgICduZ0Nvb2tpZXMnLFxyXG4gICAgJ2JzdHRlYW0uc2VydmljZXMnLFxyXG4gICAgJ2JzdHRlYW0uY29tbW9uJyxcclxuICAgICd0b2FzdGVyJyxcclxuICAgICduZ0FuaW1hdGUnXHJcbl0pXHJcbi5jb250cm9sbGVyKFwiQXBwQ29udHJvbGxlclwiLCBBcHBDb250cm9sbGVyKVxyXG4uY29uZmlnKC8qIEBuZ0luamVjdCAqLygkY29tcGlsZVByb3ZpZGVyLCAkY29tcG9uZW50TG9hZGVyUHJvdmlkZXIsICR0cmFuc2xhdGVQcm92aWRlcikgPT4ge1xyXG4gIC8vIGRpc2FibGVzIEFuZ3VsYXJKUyBkZWJ1ZyBpbmZvXHJcbiAgJGNvbXBpbGVQcm92aWRlci5kZWJ1Z0luZm9FbmFibGVkKGZhbHNlKTtcclxuXHJcbiAgLy8gc2V0IHRlbXBsYXRlcyBwYXRoXHJcbiAgJGNvbXBvbmVudExvYWRlclByb3ZpZGVyLnNldFRlbXBsYXRlTWFwcGluZyhuYW1lID0+IGBhcHAvY29tcG9uZW50cy8ke25hbWV9LyR7bmFtZX0uaHRtbGApO1xyXG5cclxuICAvLyBBbmd1bGFyIFRyYW5zbGF0ZVxyXG4gICR0cmFuc2xhdGVQcm92aWRlclxyXG4gICAgICAudXNlU2FuaXRpemVWYWx1ZVN0cmF0ZWd5KCdzYW5pdGl6ZScpXHJcbiAgICAgIC51c2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyTG9nKClcclxufSk7Il19
