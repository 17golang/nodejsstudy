/**
 * Created by fengxiang on 2017/6/21.
 */


var initapp = require("./init.js");

function waraper( brithday ) {

    var curr_brith = brithday

    var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss S")
    console.log(` ${time2} My waraper `)

    function age(flag) {

        var time3 = new Date().Format("yyyy-MM-dd hh:mm:ss S")
        console.log(` ${time3} My age `)
        return flag-curr_brith;

    }

    return age

}


var t1 = waraper(20)
var t2 = waraper(30)

console.log(`thd t1 is ${t1(50)}`)
console.log(`the t2 is ${t2(1600)}`)

var time4 = new Date().Format("yyyy-MM-dd hh:mm:ss S")
console.log(` ${time4} My end `)


