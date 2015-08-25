(function() {


  'use strict';

  angular.module('search')
    .controller('ElasticSearchController', [
      '$scope', 'ElasticSearchQuery', function($scope, ElasticSearchQuery) {

        $scope.term = '';//beta

        $scope.onKeyUpSendTerm = function() {

          $scope.jsonTerm = {          
            'size': 20,
            'query': {
              'match': {
                '_all': {
                  'query': $scope.term,//beta
                  'operator': 'and'
                }
              }
            },
            'sort' : [
              {'colonia' : {'order' : 'asc', 'mode' : 'avg'}}
            ]
          };

          ElasticSearchQuery.query({}, $scope.jsonTerm, (function(response) {
            console.log('Success:' + JSON.stringify(response));
            $scope.jsonResponse = response;
          }()), function(errorResponse) {//beta
            console.log('Error:' + JSON.stringify(errorResponse));
          });

        };

        /*
        $scope.reset = function() {//beta
          $scope.term = angular.copy($scope.master);
        };
        */

        //$scope.reset();//beta
        
      }
    ]);


}).call(this);
