'use strict';

//Carts service used for communicating with the carts REST endpoints
angular.module('carts').factory('Carts', ['$resource',
	function($resource) {
		return $resource('carts/:cartId', {
			cartId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);