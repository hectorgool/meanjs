'use strict';

// Items controller
angular.module('items').controller('ItemsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Items', 'ItemSlug',
	function($scope, $stateParams, $location, Authentication, Items, ItemSlug) {
		$scope.authentication = Authentication;

		// Create new Item
		$scope.create = function() {

			// Create new Item object
			var item = new Items({
				name:            this.name,
				sku:             this.sku,//santo
				description:     this.description,
				slug:            this.slug,
				pricing : [ {
					list:        this.list,
					retail:      this.retail,
					savings:     this.savings,
					pct_savings: this.pct_savings
				} ],
				shipping: [ {
					dimensions : [ {
						width: this.width,
						height: this.height,
						depth: this.depth
					} ],
        			weight: this.weight
    			} ],
    			images: [ {
    				images: this.images
    			} ]
			});

			// Redirect after save
			item.$save(function(response) {

				$location.path('items/' + response._id);
				// Clear form fields
				$scope.name = '';
				$scope.sku  = '';//santo
				$scope.description = '';
				$scope.slug = '';

			}, function(errorResponse) {

				$scope.error = errorResponse.data.message;

			});

		};

		// Remove existing Item
		$scope.remove = function(item) {

			if (item) {
				item.$remove();

				for (var i in $scope.items) {
					if ($scope.items[i] === item) {
						$scope.items.splice(i, 1);
					}
				}

			} 
			else {
				$scope.item.$remove(function() {
					$location.path('items');
				});
			}

		};

		// Update existing Item
		$scope.update = function() {

			var item = $scope.item;
			item.$update(function() {
				$location.path('items/' + item._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
			
		};

		// Find a list of Items
		$scope.find = function() {

			$scope.items = Items.query();

		};

		// Find existing Item
		$scope.findOne = function() {

			$scope.item = Items.get({
				itemId: $stateParams.itemId
			});

		};

		// Find existing Item Slug
		$scope.findOneSlug = function() {

			$scope.item = ItemSlug.get({
				itemSlug: $stateParams.itemSlug
			});

		};


		$scope.cart = { quatity : 1 };

		//santo: beta
		$scope.pushMinus = function(){

			if( $scope.cart.quatity >= 1 ){
				$scope.cart.quatity = $scope.cart.quatity - 1;
			}    		
    		console.log('data: ' + JSON.stringify($scope.cart.quatity) );

		};

		//santo: beta
		$scope.pushPlus = function(){

			$scope.cart.quatity = $scope.cart.quatity + 1;
    		console.log('data: ' + JSON.stringify($scope.cart.quatity) );

		};


	}	
]);