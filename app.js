/**********************************************************************/
// App Name     : FILM REVIEWER										   /	
// Repository   : https://github.com/dinhhuythong/Film_Reviewer.git    /
// Created Date : 8 Aug 2014										   /
// Author 		: tranquansp + dinhhuythong							   /
// Purpose 		: Review cinema films + invite stranger to go to cine  /
/**********************************************************************/
// import library
var express = require('express'), // express module
    film_func = require('film-node'), // general lib
    ejsEngine = require('ejs'); // javascript + html template
var cluster = require('cluster') // multi-core programming
	, numCPUs = require('os').cpus().length; // get number of CPU core
	
var timeout = require('connect-timeout'); // manage timeout of express request,using middleware 'timeout'
	
// disable idle-gc => must do in next version	
// var g = require('node_modules/node-idle-gc/idle-gc');
// var addon = require('idle-gc/idle-gc');

	//~ addon.start();      // Run at 5 second intervals.
	//~ addon.start(7500);  // Run at 7.5 second intervals. Stops the old timer first.
	//~ addon.stop();       // Stop the timer.
 
// load config    
var config = require('./node_modules/film-node/lib/config.json');

// set maxSockets to 9999
require("http").globalAgent.maxSockets = config.SOCKET_MAXSOCKET; 

//film_func.clusterWorker = cluster;
if (cluster.isMaster) {
	var worker, i;
	// Fork workers.
	for (i = 0; i < numCPUs; i++) {
		worker = cluster.fork();
		console.info('Workerer #' + worker.id, 'with pid', worker.process.pid, 'is alived ');
	}
	film_func.requestWorker = cluster;
	cluster.on('exit', function(worker, code, signal) {
		console.info('Workerer #' + worker.id, 'with pid', worker.process.pid, 'died');
	});

}
else {
	var path = require('path')
		, RedisStore = require('socket.io/lib/stores/redis')
		, redis = require('redis')
		, pub = redis.createClient()
		, sub = redis.createClient()
		, client = redis.createClient();

	// init express
	var app = express();
	
	// load Engine EJS
	//app.engine("ejs",ejsEngine); another express
	app.set("view engine","ejs");

	// public directory PUBLIC_DIR
	app.use(config.PUBLIC_DIR,express.static(__dirname + config.PUBLIC_DIR));
	// load icon
	app.use(express.favicon(__dirname + config.WEB_ICON));
	// set timeout request
	app.use(timeout(5000));
	// next action if timeout
	app.use(haltOnTimedout);
	
	// config express
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	
	// listen to request and response
	// show index page
	app.get(config.PAGE_ROOT, film_func.html_showDataIndexPage);

	// show page current films
	app.get(config.PAGE_CURR, film_func.html_showDataByClCurrFilm);

	// show page by id of current film
	//console.log(config.PAGE_CURR + config.SYM_SEPARATE + config.SYM_COLON + config.PARAM_1);
	app.get(config.PAGE_CURR + config.SYM_SEPARATE + config.SYM_COLON + config.PARAM_1, film_func.html_showDataCurrentFilmById);

	// show page by id of new film
	app.get(config.PAGE_NEW + config.SYM_SEPARATE + config.SYM_COLON + config.PARAM_1, film_func.html_showDataNewFilmById);

	// show page by id of old film
	app.get(config.PAGE_OLD + config.SYM_SEPARATE + config.SYM_COLON + config.PARAM_1, film_func.html_showDataOldFilmById);

	// go to chat
	app.get('/chat', film_func.html_chatPage);
		
	// go to contact Page
	app.get('/lienhe',film_func.html_showContentContactPage);
	
	// go to new Page -> stop supporting
	app.get('/ajax/new',film_func.html_showAjaxCurrFilmPage);
	
	// show another Page
	app.get(config.SYM_ALL, film_func.html_tempPage);

	//	init http,io
	var http = require("http").createServer(app);
	var io = require("socket.io").listen(http);

	// server listens
	http.listen(config.WEBSERVER_PORT,config.WEBSERVER_HOST, function() {
	  console.log(' Running ' + config.WEBSERVER_HOST +' at port ' + config.WEBSERVER_PORT);
	});

	//  socket module config
	io.set('match original protocol', true);
	// *:* means receive all ip,all port
	io.set('origins', '*:*');
	// disable log
	io.set('log level', 1);
	
	// store client , subcribe , public client in RedisStore
	// remember run Redis server first
	io.set('store', new RedisStore({
		redisPub: pub
		, redisSub: sub
		, redisClient: client
	}));
	
	// next action if timeout
	function haltOnTimedout(req, res, next){ if (!req.timedout) next();}

	// start socket.io
	film_func.socket_Tasks(io);
}



