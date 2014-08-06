// function to get Data from mongodb




//~ var myCallback = function(pageNum) {
  	//~ var server = new mongodb.Server('localhost',27017,{auto_reconnect:true},10);
	//~ var db = new mongodb.Db("mydb",server,{w:1});
	//~ var resultStr="";
	//~ db.open(function(err,db){
		//~ if(err){
			//~ console.log("err occured.");
		//~ }
		//~ db.collection('cl_currFilms',function(err,collection){
		//~ //receive all result
			//~ collection.find().toArray(function(err,items){
				//~ if(err) throw err;
				//~ //console.log(" total item : " + items.length);
				//~ if(pageNum >= items.length)
					//~ pageNum = items.length;
				//~ for(var i=0;i<pageNum;i++){
					//~ resultStr += '<div id="content"><h2>';
					//~ resultStr += items[i].name;
					//~ resultStr += '</h2><img style="margin: 0 20px 20px 0; float: left; margin: 0 20px 0 0; width:180px; height: 250px;" src="';
					//~ resultStr += items[i].image;
					//~ resultStr += '" alt="image" /><p><b>Information:</b></p>';
					//~ resultStr += items[i].summary;
					//~ resultStr += '</p><div class="clear"> </div></div>';
					//~ //console.log("Item "+ i + " is : " + items[i]);
					//~ //console.log(resultStr);
				//~ }
				//~ //callback(resultStr);
			//~ });
			//~ //console.log("dont know why");
			//~ //db.close();
			//~ console.log(resultStr);		
			//~ return resultStr;	
		//~ });
	//~ });
//~ };
//~ 
//~ var usingItNow = function(callback) {
	//~ console.log(callback(NUM_PAGEFILMS));
	//~ //return callback(NUM_PAGEFILMS);
//~ };

//~ 
//~ 
//~ 
//~ 
//~ function getDataByPageNum(pageNumber, resultStr ,callback) {
	//~ var server = new mongodb.Server('localhost',27017,{auto_reconnect:true},10);
	//~ var db = new mongodb.Db("mydb",server,{w:1});
	//~ db.open(function(err,db){
		//~ if(err){
			//~ console.log("err occured.");
		//~ }
		//~ db.collection('cl_currFilms',function(err,collection){
		//~ //receive all result
			//~ collection.find().toArray(function(err,items){
				//~ if(err) throw err;
				//~ //console.log(" total item : " + items.length);
				//~ if(pageNumber >= items.length)
					//~ pageNumber = items.length;
				//~ for(var i=0;i<pageNumber;i++){
					//~ resultStr += '<div id="content"><h2>';
					//~ resultStr += items[i].name;
					//~ resultStr += '</h2><img style="margin: 0 20px 20px 0; float: left; margin: 0 20px 0 0; width:180px; height: 250px;" src="';
					//~ resultStr += items[i].image;
					//~ resultStr += '" alt="image" /><p><b>Information:</b></p>';
					//~ resultStr += items[i].summary;
					//~ resultStr += '</p><div class="clear"> </div></div>';
					//~ //console.log("Item "+ i + " is : " + items[i]);
					//~ //console.log(resultStr);
				//~ }
				//~ //callback(resultStr);
			//~ });
			//~ //console.log("dont know why");
			//~ //db.close();
			//~ console.log(resultStr);		
			//~ //return resultStr;	
		//~ });
	//~ });
//~ }



/*
var getDataByPageNum = function(pageNumber){
	var server = new mongodb.Server('localhost',27017,{auto_reconnect:true},10);
	var db = new mongodb.Db("mydb",server,{w:1});
	var resultStr="";
	db.open(function(err,db){
		if(err){
			console.log("err occured.");
		}
		db.collection('cl_currFilms',function(err,collection){
		//receive all result
			collection.find().toArray(function(err,items){
				if(err) throw err;
				//console.log(" total item : " + items.length);
				if(pageNumber >= items.length)
					pageNumber = items.length;
				for(var i=0;i<pageNumber;i++){
					resultStr += '<div id="content"><h2>';
					resultStr += items[i].name;
					resultStr += '</h2><img style="margin: 0 20px 20px 0; float: left; margin: 0 20px 0 0; width:180px; height: 250px;" src="';
					resultStr += items[i].image;
					resultStr += '" alt="image" /><p><b>Information:</b></p>';
					resultStr += items[i].summary;
					resultStr += '</p><div class="clear"> </div></div>';
					//console.log("Item "+ i + " is : " + items[i]);
					console.log(resultStr);
				}
				//return resultStr;
			});
			console.log("dont know why");
			//db.close();
			console.log(resultStr);
			//return resultStr;
			//db.close();
		});
	});
};
*/

//~ function getDataByPageNum(pageNumber){
	
//~ }





