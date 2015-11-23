var argv = require('argv'),
    echo = require('../lib/echo');
    args = argv.run();
console.log(echo(args.targets.join(' ')));


// 在Windows系统下的做法完全不同，我们得靠.cmd文件来解决问题。假设node-echo.js存放在C:\Users\user\bin目录，并且该目录已经添加到PATH环境变量里了。接下来需要在该目录下新建一个名为node-echo.cmd的文件，文件内容如下：

// @node "C:\User\user\bin\node-echo.js" %*
// 这样处理后，我们就可以在任何目录下使用node-echo命令了。