/**********************************************************************/
// App Name     : FILM REVIEWER										   /	
// Repository   : https://github.com/dinhhuythong/Film_Reviewer.git    /
// Created Date : 8 Aug 2014										   /
// Author 		: tranquansp + dinhhuythong							   /
// Purpose 		: Review cinema films + invite stranger to go to cine  /
/**********************************************************************/
// import library
var express = require('express'),
    film_func = require('film-node');
// load config    
var config = require('./node_modules/film-node/lib/config.json');

var app = express();
// public directory PUBLIC_DIR
app.use(config.PUBLIC_DIR,express.static(__dirname + config.PUBLIC_DIR));
// load icon
app.use(express.favicon(__dirname + config.WEB_ICON));

// listen to request and response
// show index page
app.get(config.PAGE_ROOT, film_func.html_showDataIndexPage);

app.use(express.favicon(__dirname + '/public/images/favicon.ico'));

// show page current films
app.get(config.PAGE_CURR, film_func.html_showDataByClCurrFilm);

// show page by id of current film
//console.log(config.PAGE_CURR + config.SYM_SEPARATE + config.SYM_COLON + config.PARAM_1);
app.get(config.PAGE_CURR + config.SYM_SEPARATE + config.SYM_COLON + config.PARAM_1, film_func.html_showDataCurrentFilmById);

// show page by id of new film
app.get(config.PAGE_NEW + config.SYM_SEPARATE + config.SYM_COLON + config.PARAM_1, film_func.html_showDataNewFilmById);

// show page by id of old film
app.get(config.PAGE_OLD + config.SYM_SEPARATE + config.SYM_COLON + config.PARAM_1, film_func.html_showDataOldFilmById);

// show another Page
app.get(config.SYM_ALL, film_func.html_tempPage);

//	server listens
app.listen(config.WEBSERVER_PORT,config.WEBSERVER_HOST);
console.log(' Running ' + config.WEBSERVER_HOST +' at port ' + config.WEBSERVER_PORT);

