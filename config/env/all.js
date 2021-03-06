'use strict';

module.exports = {
	app: {
		//title: 'MEAN.JS',
		title: 'SANTIX',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'mongodb, express, angularjs, node.js, mongoose, passport'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	// The secret should be set to a non-guessable string that
	// is used to compute a session hash
	sessionSecret: 'MEAN',
	// The name of the MongoDB collection to store sessions in
	sessionCollection: 'sessions',
	// The session cookie settings
	sessionCookie: {
		path: '/',
		httpOnly: true,
		// If secure is set to true then it will cause the cookie to be set
		// only when SSL-enabled (HTTPS) is used, and otherwise it won't
		// set a cookie. 'true' is recommended yet it requires the above
		// mentioned pre-requisite.
		secure: false,
		// Only set the maxAge to null if the cookie shouldn't be expired
		// at all. The cookie will expunge when the browser is closed.
		maxAge: null,
		// To set the cookie in a specific domain uncomment the following
		// setting:
		// domain: 'yourdomain.com'
	},
	// The session cookie name
	sessionName: 'connect.sid',
	log: {
		// Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
		format: 'combined',
		// Stream defaults to process.stdout
		// Uncomment to enable logging to a log on the file system
		options: {
			stream: 'access.log'
		}
	},
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/lib/bootstrap-social/bootstrap-social.css',
				'public/lib/font-awesome/css/font-awesome.css',
				//'public/lib/blueimp-bootstrap-image-gallery/css/bootstrap-image-gallery.min.css',
				//'public/lib/blueimp-gallery/css/blueimp-gallery.css'
				'public/lib/blueimp-gallery/css/blueimp-gallery.min.css'
			],
			js: [
				'//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',//beta:santo
				'public/lib/bootstrap/dist/js/bootstrap.min.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/angular-slugify/angular-slugify.js',				
				'public/lib/blueimp-gallery/js/jquery.blueimp-gallery.min.js',
				//'public/lib/blueimp-bootstrap-image-gallery/js/bootstrap-image-gallery.min.js',
				'public/lib/angular-translate/angular-translate.min.js',//santo
				'public/lib/angular-sanitize/angular-sanitize.min.js',//santo
				'public/lib/angular-masonry/angular-masonry.js'//santo
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
