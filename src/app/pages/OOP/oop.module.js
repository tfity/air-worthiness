(function () {
  'use strict';

  angular.module('BlurAdmin.pages.oop', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('oop', {
          url: '/oop',
          templateUrl : 'app/pages/oop/oop.html',
          controller: 'oopPageCtrl',
          title: 'OOP',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          }
        });
  }

})();