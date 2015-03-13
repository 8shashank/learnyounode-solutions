path=require('path')
fs=require('fs')

module.exports=function(dirname,ext,callback){
	fs.readdir(dirname,function(err,list){
		if(err){
			return callback(err,null);
		}
		output=list.filter(function(data){
			return (path.extname(data)==='.'+ext);});
		callback(null,output);
	});
}