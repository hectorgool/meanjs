'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var dimensionsSchema = new Schema({
	_id  : false,//santo
	width: {
		type: Number,
		default: 0.0
	},
	height: {
		type: Number,
		default: 0.0
	},
	depth: {
		type: Number,
		default: 0.0
	}
});


var shippingSchema = new Schema({ 
	_id   : false,//santo
	weight: {
		type: Number,
		default: 0.0
	},
	dimensions: [dimensionsSchema]
});


var pricingSchema = new Schema({ 
	_id : false,//santo
	list: {
		type: Number,
		default: 0.0
	},
	retail: {
		type: Number,
		default: 0.0
	},
	savings: {
		type: Number,
		default: 0.0
	},
	pct_savings: {
		type: Number,
		default: 0.0
	}
});

//beta
var imageSchema = new Schema({ 
	_id : false,//santo
	images: {
		type: String,
		default: '',
		trim: true
	}
});


/**
 * Item Schema
 */
var ItemSchema = new Schema({
	name: {
		type: String,
		default: '',
		trim: true,
		required: 'Name cannot be blank'
	},
	sku: {
		type: String,
		default: '',
		trim: true
	},	
	slug: {
		type: String,
		default: ''
	},	
	description: {
		type: String,
		default: '',
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	created: {
		type: Date,
		default: Date.now
	},
	shipping: [shippingSchema],
	pricing: [pricingSchema],
	images: [imageSchema]//beta
});


mongoose.model('Item', ItemSchema);
