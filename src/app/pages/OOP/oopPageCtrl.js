(function () {
  'use strict';

  angular.module('BlurAdmin.pages.oop')
      .controller('oopPageCtrl', oopPageCtrl);

  /** @ngInject */
  function oopPageCtrl($scope, $filter, editableOptions, editableThemes) {

    $scope.smartTablePageSize = 10;

    $scope.ajcTableData = [
      {
        id: 1,
        checkName: 'Daily',
        checkFreq: '24/72 hr',
        lastPerformed: '4th July 2017',
        nextDue: '7th July 2017',
        toGo: '3'
      },{
        id: 2,
        checkName: 'Weekly',
        checkFreq: '7 Days',
        lastPerformed: '4th July 2017',
        nextDue: '11th July 2017',
        toGo: '6'
      },{
        id: 3,
        checkName: 'APU reading',
        checkFreq: 'Monthly',
        lastPerformed: '4th July 2017',
        nextDue: '4th August 2017',
        toGo: '26'
      },{
        id: 4,
        checkName: 'Parking',
        checkFreq: '15 Days',
        lastPerformed: '24th July 2017',
        nextDue: '4th August 2017',
        toGo: '6'
      },{
        id: 5,
        checkName: 'A check',
        checkFreq: '4 Months',
        lastPerformed: '2nd July 2017',
        nextDue: '2nd December 2017',
        toGo: '76'
      },{
        id: 6,
        checkName: 'Nav DB',
        checkFreq: '28 Days',
        lastPerformed: '2nd July 2017',
        nextDue: '1st August 2017',
        toGo: '26'
      }
      
    ]; 
      
      $scope.ajiTableData = [
      {
        id: 1,
        checkName: 'FHDB',
        checkFreq: 'Monthly',
        lastPerformed: '4th July 2017',
        nextDue: '7th July 2017',
        toGo: '3'
      },{
        id: 2,
        checkName: 'Monthly',
        checkFreq: '30 Days',
        lastPerformed: '4th July 2017',
        nextDue: '11th July 2017',
        toGo: '26'
      },{
        id: 3,
        checkName: 'APU reading',
        checkFreq: 'Monthly',
        lastPerformed: '4th July 2017',
        nextDue: '4th August 2017',
        toGo: '26'
      },{
        id: 4,
        checkName: 'Parking',
        checkFreq: '15 Days',
        lastPerformed: '24th July 2017',
        nextDue: '4th August 2017',
        toGo: '6'
      },{
        id: 5,
        checkName: 'M1 check',
        checkFreq: '4 Months',
        lastPerformed: '2nd July 2017',
        nextDue: '2nd December 2017',
        toGo: '76'
      },{
        id: 6,
        checkName: 'Nav DB',
        checkFreq: '28 Days',
        lastPerformed: '2nd July 2017',
        nextDue: '1st August 2017',
        toGo: '26'
      }
      
    ];

    $scope.ajcEditableTableData = $scope.ajcTableData.slice(0, 3);
    $scope.ajiEditableTableData = $scope.ajiTableData.slice(0, 3);


    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


  }

})();
