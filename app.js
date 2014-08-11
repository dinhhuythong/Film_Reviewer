/**********************************************************************/
// App Name     : FILM REVIEWER										   /	
// Repository   : https://github.com/dinhhuythong/Film_Reviewer.git    /
// Created Date : 8 Aug 2014										   /
// Author 		: tranquansp + dinhhuythong							   /
// Purpose 		: Review cinema films + invite stranger to go to cine  /
/**********************************************************************/
// import library
var express = require('express'),
    film_func = require('film-node'),
    ejsEngine = require('ejs');

// load config    
var config = require('./node_modules/film-node/lib/config.json');
// init express
var app = express();
// load Engine EJS
//app.engine("ejs",ejsEngine); another express
app.set("view engine","ejs");

// public directory PUBLIC_DIR
app.use(config.PUBLIC_DIR,express.static(__dirname + config.PUBLIC_DIR));
// load icon
app.use(express.favicon(__dirname + config.WEB_ICON));

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

// start socket.io
film_func.socket_Tasks(io);






