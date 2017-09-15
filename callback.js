/**
 * Created by robertfeng on 2017/3/27.
 */

var initapp = require("./init.js");

function currAges( ages ){
    return ages-2;
}


var callbacks = function callback_func( name , ages) {

    //for ( ind = 1 ; ind<3000000000; ind++ ){}

    //var time2 = Date.now();
    var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss S");

    console.log(` ${time2} My name is ${name} and my age is ${currAges(ages)}`);

}


function maintest( school , callback1 ) {

    callback1('robert',39);



}

maintest('cnxx',  function ( name , ages) {

    //for ( ind = 1 ; ind<3000000000; ind++ ){}

    //var time2 = Date.now();
    var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss S");

    console.log(` ${time2} My name is ${name} and my age is ${currAges(ages)}`);

});

var time3 = new Date().Format("yyyy-MM-dd hh:mm:ss S");


console.log(` ${time3} I am back school ..........`)
