var express = require('express');

var app = new express();

app.use(express.static(__dirname+'/app'));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/app/index.html')
}).listen(3000,function(){
	console.log('server is runing on loclahost port 3000')
});



