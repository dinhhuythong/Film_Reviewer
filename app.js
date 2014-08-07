var Step = require('step');
var express = require('express')
  , http = require('http');
var mongodb = require("mongodb");
var fs = require('fs');

var NUM_PAGEFILMS = 10;
var host = "localhost";
var HTTP_STRING = 'http://';
var SYM_COLON = ":";
var PUBLIC_DIR = "/public";
var IMAGE_DATA_DIR = "/image/data";
var SYM_SEPARATE = "/";
var FILE_STYLE_CSS =  'style.css';
var port = 1234;

var FILM_ID = 'id';
var FILM_NAME = 'name';
var FILM_SUMMARY = 'summary';
var FILM_DATE = 'date';
var FILM_INFORMATION = 'information';
var FILM_DIRECTOR = 'director';
var FILM_ACTOR = 'actors';
var FILM_IMAGE = 'image';

var strHeader = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">';
strHeader += '<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"><head><meta http-equiv="content-type" content="text/html; charset=utf-8" /><meta name="description" content="Simple Template #3 from simpletemplates.org" /><meta name="keywords" content="simple #3, template, simpletemplates.org" />';
strHeader += '<link rel="stylesheet" type="text/css" href="' + HTTP_STRING + host + SYM_COLON + port + PUBLIC_DIR + SYM_SEPARATE + FILE_STYLE_CSS + '" /><title>Simple Template #3 - simpletemplates.org</title></head><body><div id="wrap">';
strHeader += '<div id="menu"><ul><li><a href="/">Home</a></li><li><a href="/new">New</a></li><li><a href="/curr">Đang Chiếu</a></li><li><a href="/old">Đã Chiếu</a></li><li><a href="/chat">Rủ Rê Xem Phim</a></li><li><a href="/contact">Contact Us</a></li></ul></div>';

var strContent;
//'<div id="content"><h2>NAME</h2><img style="margin: 0 20px 20px 0; float: left; margin: 0 20px 0 0; width:180px; height: 250px;" src="123" alt="image" /><p><b>Information:</b>Infomation</p><p>No images were used for a design. This is pure xhtml/css template.</p><div class="clear"> </div></div>';

var strFooter = '<div class="footer"><h2>© Copyright 2006-2014 Test</h2></div></div></body></html>';


var app = express(); 
app.use(PUBLIC_DIR,express.static(__dirname + PUBLIC_DIR));
//app.use(IMAGE_DATA_DIR,express.static(__dirname + PUBLIC_DIR + IMAGE_DATA_DIR));

app.use(express.bodyParser());
console.log("running server ...");
//console.log(__dirname + '/template');
app.get("/detail",function(request,response){
		response.send('go to detail');
	});

app.get("/admin",function(request,response){
		response.send('go to admin');
	});
	
app.get("/",function(request,response){
	var server = new mongodb.Server('localhost',27017,{auto_reconnect:true},10);
	var db = new mongodb.Db("mydb",server,{w:1});
		db.open(function(err,db){
			if(err){
				console.log("err occured.");
			}
			var resultStr = "";
			db.collection('cl_currFilms',function(err,collection){
			//receive all result
				collection.find().toArray(function(err,items){
					if(err) throw err;
					//console.log(" total item : " + items.length);
					
					for(var i=0;i<items.length;i++){
						resultStr += '<div id="content"><h2><a href="/new/' + items[i].id + '">';
						resultStr += items[i].name + "</a>";
						resultStr += '</h2><img style="margin: 0 20px 20px 0; float: left; margin: 0 20px 0 0; width:180px; height: 250px;" src="';
						resultStr += PUBLIC_DIR + IMAGE_DATA_DIR + SYM_SEPARATE + items[i].image;
						resultStr += '" alt="image" /><p><b>Information:</b></p>';
						resultStr += items[i].summary;
						resultStr += '</p><div class="clear"> </div></div>';
						if(i == items.length - 1)
							response.send(strHeader + resultStr + strFooter);
					}
				});
			});
		});
	});
	
app.get("/new",function(request,response){
	var server = new mongodb.Server('localhost',27017,{auto_reconnect:true},10);
	var db = new mongodb.Db("mydb",server,{w:1});
		db.open(function(err,db){
			if(err){
				console.log("err occured.");
			}
			var resultStr = "";
			db.collection('cl_currFilms',function(err,collection){
			//receive all result
				collection.find().toArray(function(err,items){
					if(err) throw err;
					//console.log(" total item : " + items.length);
					
					for(var i=0;i<items.length;i++){
						resultStr += '<div id="content"><h2><a href="/new/' + items[i].id + '">';
						resultStr += items[i].name + "</a>";
						resultStr += '</h2><img style="margin: 0 20px 20px 0; float: left; margin: 0 20px 0 0; width:180px; height: 250px;" src="';
						resultStr += PUBLIC_DIR + IMAGE_DATA_DIR + SYM_SEPARATE + items[i].image;
						resultStr += '" alt="image" /><p><b>Information:</b></p>';
						resultStr += items[i].summary;
						resultStr += '</p><div class="clear"> </div></div>';
						if(i == items.length - 1)
							response.send(strHeader + resultStr + strFooter);
					}
				});
			});
		});
	});
	
app.get("/new/:id",function(request,response){
	var server = new mongodb.Server('localhost',27017,{auto_reconnect:true},10);
	var db = new mongodb.Db("mydb",server,{w:1});
	db.open(function(err,db){
			if(err){
				console.log("err occured.");
			}
		var responeStr;
		db.collection('cl_currFilms',function(err,collection){		
			//console.log(request.params.id);
			if(request.params.id != null)
			{
				var value = parseInt(request.params.id);
				var query = {};
				query[FILM_ID] = value;

				collection.findOne(query,function(err,result){
					
				var resultRes = '<div id="content"><img style="margin: 0 20px 20px 0; float: left; margin: 0 20px 0 0; width:250px; height: 320px;" src="';	
				resultRes += PUBLIC_DIR + IMAGE_DATA_DIR + SYM_SEPARATE + result.image;
				resultRes += '" alt="image" /><h2><b>';
				resultRes += result.name;
				resultRes += '</b></h2><p><b>Director:</b>DIRECTOR</p><p><b>Cast:</b>Cast</p><p><b>Release Date:</b>';
				resultRes += result.date;
				resultRes +=  '</p><p><b>Running time:</b>Time</p><p><b>Category:</b>Cate</p><p><b>Information:</b>';
				resultRes += result.information;
				resultRes +=  '</p></div>';
				if (err) throw err;
				response.send(strHeader + resultRes + strFooter);	
				});	
			}	
		});
	});
});
	
// if request is not good
app.get('*', function(req, res){
  res.send('<div style="margin-top:50px;text-align:center;"><h1>Page not found<h1><h2><a href="/">Quay về Trang Chủ</a></h2></div>', 404);
});	

app.listen(port,host);
var server = http.createServer(app);










