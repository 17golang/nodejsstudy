/**
 * Created by fengxiang on 2017/4/12.
 */


var units = require('./init.js');
// var fs = require("fs");
//
// var data = fs.readFileSync('input.txt');
//
// console.log(data.toString());
// console.log("Program Ended");


var fs = require("fs");

fs.readFile('input.txt', function (err, data) {

    if (err) return console.error(err);

    var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss S");

    console.log(time2+"     "+data.toString());

});



var time3 = new Date().Format("yyyy-MM-dd hh:mm:ss S");

console.log(time3 + "       Program Ended");

// for (intd = 1 ; intd<500;intd++){
//     console.log(intd);
// }


// function add( a){
//
//
//     return function (b) {
//
//         for ( var ind = 1 ; ind<1000000000;ind++){}
//
//         console.log(` 开始执行异步的操作,他应该会在后面显示`);
//         return a+b;
//     }
//
//
// }
//
//
// var add_tmp = add(3);
//
//
// result1 = add_tmp(4);
//
//
// console.log('wait some time, doing some fun '+result1);
//
//
//
//



