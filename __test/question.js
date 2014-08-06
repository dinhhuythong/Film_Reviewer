var mongodb = require("mongodb");

//console.log(getData(myCallback));
//getData(myCallback);

//~ var myCallback = function(number) {
  	//~ var server = new mongodb.Server('localhost',27017,{auto_reconnect:true},10);
	//~ var db = new mongodb.Db("mydb",server,{w:1});
	//~ var resultStr="";
	//~ db.open(function(err,db){
		//~ db.collection('cl_currFilms',function(err,collection){
			//~ //receive all result
			//~ collection.find().toArray(function(err,items){
				//~ if(number >= items.length)
					//~ number = items.length;
				//~ for(var i=0;i<number;i++){
					//~ resultStr += items[i].id + " : ";
					//~ resultStr += items[i].name;
				//~ }
			//~ });
			//~ //console.log(resultStr);		
			//~ return resultStr;	
		//~ });
	//~ });
//~ };
//~ 
//~ var getData = function(callback) {
	//~ return callback(10);
//~ };


var server = new mongodb.Server('localhost',27017,{auto_reconnect:true},10);
var db = new mongodb.Db("mydb",server,{w:1});
db.open(function(err,db){
	var resultStr="";
	var number = 3;
	db.collection('cl_currFilms',function(err,collection){
		//receive all result
		collection.find().toArray(function(err,items){
			if(number >= items.length)
				number = items.length;
			console.log('trap 1');	
					
			for(var i=0;i<items.length;i++){
				resultStr += items[i].id + " : ";
				resultStr += items[i].name;
				resultStr += '\n';
				if(i == items.length - 1)
					console.log(resultStr);				
			}
			console.log('trap 2');	
			
		});
		console.log('trap 3');		
				
		//return resultStr;	
	});
});
