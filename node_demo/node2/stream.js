var fs = require('fs');
function copy(src,dst){ 
	 var rs = fs.createReadStream(src); //创建一个只读数据流
	 var ws = fs.createWriteStream(dst); //创建一个只写数据流
	 rs.on('data',function(chunk){
	 	if(ws.write(chunk)==false){ 
	 		rs.pause();
	 	}
	 });
	 rs.on('end',function(){ 
	 	ws.end();
	 });
	 ws.on('drain',function(){ 
	 	rs.resume();
	 })
}
function main(argv){ 
	copy(argv[0],argv[1]);
}
main(process.argv.slice(2));