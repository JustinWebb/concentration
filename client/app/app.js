var angular = require('angular');
var ngAnimate = require('angular-animate');
var uiRouter = require('angular-ui-router');
var ngAnimate = require('./common/common.module');



var AppController = function ($scope) {
'use strict';
  $scope.foo = null;
  $scope.bar = null;
};

var AppConfig = function ($stateProvider, $urlRouterProvider) {
'use strict';
  $stateProvider.state('root', {
    url: '/',
    controller: AppController
  });

  $urlRouterProvider.otherwise('/');
};

angular
  .module('app', [
    'ngAnimate',
    'ui.router',
    // custom components
    'app.common'
  ])
  .config(AppConfig)
  .controller('AppController', AppController);