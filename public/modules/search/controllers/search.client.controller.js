(function() {


  'use strict';

  angular.module('search')
    .controller('ElasticSearchController', [
      '$scope', 'ElasticSearchQuery', function($scope, ElasticSearchQuery) {

        $scope.term = $('#term').val();//beta

        $scope.onKeyUpSendTerm = function() {

          $scope.jsonTerm = {          
            'size': 10,
            'query': {
              'match': {
                '_all': {
                  'query': $('#term').val(),
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
          }), function(errorResponse) {
            console.log('Error:' + JSON.stringify(errorResponse));
          });

        };


      }
    ]);


}).call(this);
