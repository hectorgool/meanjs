(function() {


  'use strict';

  angular.module('search')
    .factory('ElasticSearchQuery', [
      '$resource', function($resource) {
        return $resource('http://localhost:9001/term', {}, {
          query: {
            method: 'POST',
            cache: false,
            isArray: false
          }
        });
      }
    ]);


}).call(this);
