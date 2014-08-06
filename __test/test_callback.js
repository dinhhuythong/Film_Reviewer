
var myCallback = function(data) {
  return 'got data: '+data;
};

var usingItNow = function(callback) {
	return callback('get it?');
};

console.log(usingItNow(myCallback));
