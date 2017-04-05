/**
 * Created by robertfeng on 2017/3/27.
 */


var fs = require("fs");

var callfunc = function (err,data) {
    if (err)
        return console.error(err);
    console.log(data.toString());
}

fs.readFile('input.txt', callfunc);

/**
 *
 fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

 */

console.log("Program Ended");

