'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	carts = require('../../app/controllers/carts.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/carts')
		.get(carts.list)
		.post(users.requiresLogin, carts.create);

	app.route('/carts/:cartId')
		.get(carts.read)
		.put(users.requiresLogin, carts.hasAuthorization, carts.update)
		.delete(users.requiresLogin, carts.hasAuthorization, carts.delete);

	// Finish by binding the cart middleware
	app.param('cartId', carts.cartByID);
};
