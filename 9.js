var http=require('http');
var bl=require('bl');
var urls=process.argv.slice(2);
var counter=0;
var data=[];
urls.forEach(function (url,index,array){
	http.get(url,function (response){
		response.pipe(bl(function(err,buffer){
			if (err){
				return console.error(err);
			}
			data[index]=buffer.toString();
			counter++;
			if (counter==array.length){
				data.forEach(function(d){
					console.log(d);
				});
			}
		}));
	});
});