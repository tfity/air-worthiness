(function () {
  'use strict';

  angular.module('BlurAdmin.pages.oop', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tables', {
          url: '/tables',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'TablesPageCtrl',
          title: 'OOP',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        });
    $urlRouterProvider.when('/oop');
  }

})();