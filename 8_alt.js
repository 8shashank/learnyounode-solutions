var http=require('http');
var bl=require('bl');
var url=process.argv[2];
http.get(url,function (response){
	//response.setEncoding("utf8");
	response.pipe(bl(function(err,buffer){
		if (err){
			return console.error(err);
		}
		data=buffer.toString();
		console.log(data.length+"\n"+data);
	}));
});
		