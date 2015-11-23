var fs = require('fs');
var path = require('path');
function travel(dir,callback,finish){ 

	fs.readdir(dir,function(err,files){ 

		//块作用域
		(function next(i){ 

			if(i<files.length){ 
				var pathname = path.join(dir,files[i]);
				fs.stat(pathname,function(err,stats){ 
					if(stats.isDirectory()){ 
						travel(pathname,callback,function(){ 
							next(i+1);
						});
					}else{ 
						callback(pathname,function(){
							next(i+1);
						})
					}
				});
			}else{ 

				finish&&finish();
			}

		})();

	});
}

travel('../',function(pathname){ 
	console.log(pathname);
},function(){ 
	return false;
});