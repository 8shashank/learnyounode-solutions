var http=require('http');
var url=process.argv[2];
http.get(url,function (response){
	response.setEncoding("utf8")
	var buffer="";
	response.on("data",function(chunk){
		buffer+=chunk;
	});
	response.on("error",console.error);
	response.on("end",function(){
		console.log(buffer.length);
		console.log(buffer);
	});
});