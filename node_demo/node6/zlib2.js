var http = require('http');
var zlib = require('zlib');
var options ={ 
	hostname:"www.example.com",
	port:80,
	path:"/",
	method:"GET",
	headers:{  
		"Accept-Encoding":"gzip,deflate"
	}
}
http.request(options,function(response){

	var body = [];
	response.on('data',function(chunk){ 
		body.push(chunk);
	});
	response.on('end',function(){ 
		body = Buffer.concat(body);
		if(response.headers['content-encoding']=='gzip'){ 
			zlib.gunzip(body,function(err,data){ 
				console.log(data.toString());
			})
		}else{ 
			console.log(data.toString());
		}
	})

})