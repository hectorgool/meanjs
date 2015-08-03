'use strict';

// Configuring the Carts module
angular.module('carts').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Carts', 'carts', 'dropdown', '/carts(/create)?');
		Menus.addSubMenuItem('topbar', 'carts', 'List Carts', 'carts');
		Menus.addSubMenuItem('topbar', 'carts', 'New Cart', 'carts/create');
		Menus.addSubMenuItem('topbar', 'carts', 'My Cart', 'mycart');
	}
]);