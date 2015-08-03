'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Cart = mongoose.model('Cart'),
	_ = require('lodash');

/**
 * Create a cart
 */
exports.create = function(req, res) {
	var cart = new Cart(req.body);
	cart.user = req.user;

	cart.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(cart);
		}
	});
};

/**
 * Show the current cart
 */
exports.read = function(req, res) {
	res.json(req.cart);
};

/**
 * Update a cart
 */
exports.update = function(req, res) {
	var cart = req.cart;

	cart = _.extend(cart, req.body);

	cart.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(cart);
		}
	});
};

/**
 * Delete an cart
 */
exports.delete = function(req, res) {
	var cart = req.cart;

	cart.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(cart);
		}
	});
};

/**
 * List of Carts
 */
exports.list = function(req, res) {
	Cart.find().sort('-created').populate('user', 'displayName').exec(function(err, carts) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(carts);
		}
	});
};

/**
 * Cart middleware
 */
exports.cartByID = function(req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Cart is invalid'
		});
	}

	Cart.findById(id).populate('user', 'displayName').exec(function(err, cart) {
		if (err) return next(err);
		if (!cart) {
			return res.status(404).send({
				message: 'Cart not found'
			});
		}
		req.cart = cart;
		next();
	});
};

/**
 * Cart authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.cart.user.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};
