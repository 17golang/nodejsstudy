/**
 * Created by fengxiang on 2017/4/11.
 */

const PI = Math.PI;

exports.area = (r) => PI * r * r;

exports.circumference = (r) => 2 * PI * r;

exports.copymessage = (messages1,flag1) => {

    if( flag1 == 1)
        console.log(` The message ${messages1} 's flag is ${flag1}`);


    else if( flag1 == 2 ){
        console.log(`The message is not garggeint flag`);
    }else
        console.log("not find");


}