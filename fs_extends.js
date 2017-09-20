/**
 * Created by fengxiang on 2017/9/20.
 *
 * http://frontenddev.org/link/fs-extra-node-module.html
 *
 * fs-extra模块是系统fs模块的扩展，提供了更多便利的 API，并继承了fs模块的 API。
 *
 */


var fs = require('fs-extra');

fs.copy('/tmp/myfile', '/tmp/mynewfile', function(err) {
    if (err) return console.error(err)
    console.log("success!")
});

fs.copy('/tmp/mydir', '/tmp/mynewdir', function(err) {
    if (err) return console.error(err)
    console.log("success!")
});