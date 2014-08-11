// create new webserver
// host, port server+mongodb
// db


// create config file
// set up config file


var express = require('express');
var app = express();

app.use(express.urlencoded());
app.use(express.json());

var http = require('http').createServer(app);

http.listen(3000,'localhost', function(){
		console.log(' running install server .. ');
	});

app.get('/',function(req,res){
		res.sendfile('./views/install.html');
	});

app.post('/install',function(req,res){
		//overide = false : means dont overide database
		console.log(req.param('overide'));
		var flag = true;
		if(req.param('overide') == 'false')
		{
			var MongoClient = require('mongodb').MongoClient,
						Server = require('mongodb').Server,
						db;

			var mongoClient = new MongoClient(new Server(req.param('dbDo'), parseInt(req.param('dbPort'))));
			mongoClient.open(function(err, mongoClient) {
				db = mongoClient.db(req.param('dbName'));
			
				db.collection('system.namespaces').find().toArray(function(err, items) {
						for(var i=0;i<items.length;i++)
						{
							var crrFilmsCollection = req.param('dbName') + '.' + 'cl_currentFilms' ;
							var gnrFilmsCollection = req.param('dbName') + '.' + 'cl_generalFilms' ;
							var feedbackCollection = req.param('dbName') + '.' + 'cl_feedback' ;
							//console.log(crrFilmsCollection + " -- and --  " + items[i].name);
							if(items[i].name == crrFilmsCollection || items[i].name == gnrFilmsCollection || items[i].name == feedbackCollection){
								flag = false;
								res.send('<h1>Da co csdl nay, vui long drop database truoc khi khoi tao, hoac <a href="/">khoi tao lai</a></h1>');
							}
							if(i == items.length - 1 && flag == true)
								createConfig(req,res);
						}
					});
			});
		} // overide, dont care
		else{
				createConfig(req,res);
		}
	});



function createConfig(req,res)
{
			var sample1 = {id:1,
				nameFilm:" Người Nhện Phần 3",
				film_type : "Action",
				director : " Lee An",
				actors : " Alan Smith, William, Tran Quan",
				realeaseDate : "27/08/2014",
				endDate : "12/09/2014",
				status : "realeasing",
				information : " day la bo phim rat hay ke ve anh chang nguoi nhen rat tai gioi",
				summary : " phim bom tan mua he, moi don xem",
				image_tiny : "tiny_nguoinhen.jpg",
				image_medium : "med_nguoinhen.jpg",
				image_large : "lar_nguoinhen.jpg",
				country : "America",
				manufactor : "Disney and Hollyword"
				};
			var sample2 = {id:2,
				nameFilm:" World War Z ",
				film_type : "Action",
				director : " Lee An",
				actors : " Jilua, hasan, coo liee",
				realeaseDate : "27/08/2014",
				endDate : "12/09/2014",
				status : "realeasing",
				information : " Phim ve dai dich zoombie tren toan the gioi va smith da ra tay cuu the gioi",
				summary : " Bạn làm gì để đối mặt đại dịch zombie",
				image_tiny : "tiny_wwz.jpg",
				image_medium : "med_wwz.jpg",
				image_large : "lar_wwz.jpg",
				country : " VIET NAM",
				manufactor : "Dai THVN"
				};
			
			  // create database !!
			  var MongoClient = require('mongodb').MongoClient,
					Server = require('mongodb').Server,
					db;

				var mongoClient = new MongoClient(new Server(req.param('dbDo'), parseInt(req.param('dbPort'))));
				mongoClient.open(function(err, mongoClient) {
					db = mongoClient.db(req.param('dbName'));
		    		db.createCollection('cl_currentFilms', function(err, collection){
						collection.insert(sample1,function(err,records){
						if (err) throw err;
						//console.log("Record added as "+records[0].id);	
						});
						collection.insert(sample2,function(err,records){
						if (err) throw err;
						//console.log("Record added as "+records[0].id);	
						});
					});
					db.createCollection('cl_generalFilms', function(err, collection){
						
					});
					db.createCollection('cl_feedback', function(err, collection){
						
					});
				});
				
				
		var foo = {};
		foo.serverDo = req.param('serDo');
		foo.serverPort = req.param('serPort');
		
		foo.____Justcomment_webserver =  'Sever config';
		foo.WEBSERVER_HOST = req.param('serDo');
		foo.WEBSERVER_PORT = parseInt(req.param('serPort'));
		foo.PUBLIC_DIR = '/public';
		foo.IMAGE_DATA_DIR = '/image/data';
		foo.FILE_STYLE_CSS = '/public/style.css';
		foo.PAGE_ROOT = '/';
		foo.PAGE_NEW = '/sapchieu';
		foo.PAGE_CURR = '/dangchieu';
		foo.PAGE_OLD = '/dachieu';
		foo.WEB_ICON = '/favicon.ico';
		
		foo.____Justcomment_EJS = 'EJS config';
		foo.EJS_INDEX_PAGE = 'index/index';
		foo.EJS_CURR_FILMS_PAGE = 'curr/index';
		foo.EJS_DETAIL_PAGE = 'detail/index';
		foo.EJS_CHAT_PAGE = 'chat/index';
		foo.EJS_CONTACT_PAGE = 'contact/index';
		
		foo.____Justcomment_db = 'database config';
		foo.MONGO_HOST = req.param('dbDo');
		foo.MONGO_PORT = parseInt(req.param('dbPort'));
		foo.MONGO_DB_NAME = req.param('dbName');
		
		foo.MONGO_CL_CURRENTFILMS = 'cl_currentFilms';
		foo.MONGO_CL_ALLFILMS = 'cl_generalFilms';

		// fields in cl_currFilms
		foo.FILM_ID = 'id';
		foo.FILM_NAME = 'nameFilm';
		foo.FILM_TYPE = 'film_type';
		foo.FILM_DIRECTOR = 'director';
		foo.FILM_ACTOR = 'actors'
		foo.FILM_RELEASE_DATE = 'releaseDate';
		foo.FILM_END_DATE = 'endDate';
		foo.FILM_STATUS = 'status';
		foo.FILM_SUMMARY = 'summary';
		foo.FILM_INFORMATION = 'information';
		foo.FILM_POLL = 'poll';
		foo.FILM_TINY_IMAGE = 'image_tiny';
		foo.FILM_MEDIUM_IMAGE = 'image_medium';
		foo.FILM_LARGE_IMAGE = 'image_large';
		foo.FILM_COUNTRY = 'country';
		foo.FILM_MANUFACTOR = 'manufactor';
		
		foo.____Justcomment_gen = 'General config';
		foo.NUM_PAGEFILMS = 10;
		foo.HTTP_STRING = 'http://'
		foo.SYM_COLON = ':';
		foo.SYM_SEPARATE = '/';
		foo.SYM_ALL = '*';
		foo.PARAM_1 = 'param_1';
		
		foo.____Justcomment_socket = 'socket config';
		foo.EMIT_FIND_ANONYMOUS_CHATTER = '12799';
		foo.EMIT_FIND_FACEBOOK_CHATTER = '12798';
		foo.EMIT_SEND_MESSAGE = '12792';
		foo.RES_SERVER_HANDSHARK = 'HS_11711';
		foo.RES_SERVER_GETMESSAGE = 'GM_11711';
		foo.ONSOCKET_CHATTER_FOUND = '13577';
		foo.REQ_CLIENT = 'request_client';
		
		var jsonString = JSON.stringify(foo);
		//res.send(foo);
		
		var outputFilename = 'config.json';
		var fs = require('fs');
		fs.writeFile(outputFilename, JSON.stringify(foo, null, 4), function(err) {
			if(err) {
			  console.log(err);
			} else {
			  console.log("JSON saved to " + outputFilename);

			  //	
			  res.send('done !!! </p>turnoff server</p>cut file config.json to /node_modules/film-node/lib</p>run "node app.js"');
			}
		});  	
}


