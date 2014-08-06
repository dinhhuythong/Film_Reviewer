var mongodb = require("mongodb");
var fs = require('fs');

var server = new mongodb.Server('localhost',27017,{auto_reconnect:true},10);
var db = new mongodb.Db("mydb",server,{w:1});
db.open(function(err,db){

	if(err){
		console.log("err occured.");
	}
	
	//console.log(str);
	
	//~ db.createCollection('test3',{safe:true},function(err,collection){
		//~ if(err){
			//~ console.log(err);
		//~ }else{
			//~ console.log("created successful!");
		//~ }
		//~ 
	//~ });
		//var obj = JSON.parse(fs.readFileSync('./index.html', 'utf8'));
		//~ var obj;
		//~ fs.readFile("./index.html",function(err,data){
				//~ //obj = data;
				//~ console.log(data);
			//~ });
		//~ 
		//~ fs.readFile('./index.html', 'utf8', function (err, data) {
		  //~ if (err) throw err;
		  //~ obj = JSON.parse(data);
		//~ });
		//~ console.log(" ==>  trace ");
		
		db.collection('cl_currFilms',function(err,collection){
		//~ var json = {
					//~ 'id': 1,
					//~ 'name' : ' Nguoi nhen Phan 5',
					//~ 'image': '1-nguoinhen.png',
					//~ 'date' : '27/05/2014',
					//~ 'summary' : ' Người nhện trở về',
					//~ 'information' : 'Trận chiến vĩ đại của của người nhện và tập đọan ác ôn',
					//~ 'likes' : 20,
					//~ 'comments' : 50				
					//~ };
		//~ var json1 = {
					//~ 'id': 2,
					//~ 'name' : ' Cuoc chien sinh tu',
					//~ 'image': '1-ccst.png',
					//~ 'date' : '30/05/2014',
					//~ 'summary' : ' Cuoc chien giua nguoi Viet Nam va nguoi Sao Hoa',
					//~ 'information' : 'Hôm nay mẹ lên nương một mình em tới lớp.',
					//~ 'likes' : 2222,
					//~ 'comments' : 11				
					//~ };
		//~ var array=[json,json1];
		//~ 
		//~ collection.insert(array,{safe:true},function(err,result){
			//~ if (err) throw err;
			//~ console.log("insert done");
		//~ });
		
		
		
		//~ 
		//~ 
		//~ collection.insert(array,{safe:true},function(err,result){
			//~ if (err) throw err;
			//~ console.log("insert done");
		//~ });
//~ 
		//~ /*collection.update({'name':'tom'},{$set:{'name':'lily','age':100}},function(err,result){
			//~ if(err) throw err;
			//~ if(!err){
				//~ console.log("update successful");
			//~ }
		//~ });*/
//~ 
		//~ /*collection.remove({'name':'tom'},{safe:true},function(err,result){
			//~ if(err) console.log(err);
//~ 
		//~ });*/
		//~ 
		//receive all result
		collection.find().toArray(function(err,items){
			if(err) throw err;
			console.log(" total item : " + items.length);
			for(var i=0;i<items.length;i++){
				//console.log("Item "+ i + " is : " + items[i]);
				console.log(items[i].name);
			}

			//~ for(item in array){
				//~ console.log(array[item]);
			//~ }
			//~ 
		});
		//~ 
		//~ 
		//~ // receive all result from stream
		//~ var stream = collection.find().streamRecords();
		//~ stream.on("data",function(item){
			//~ console.log(item);
		//~ });
		//~ stream.on("end",function(){
			//~ console.log("stream is end");
		//~ });
//~ 
		//~ collection.findOne({'age':24},function(err,result){
			//~ if (err) throw err;
			//~ console.log(result);
		//~ });
	});
});
