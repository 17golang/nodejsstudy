/**
 * Created by fengxiang on 2017/4/14.
 */


var  parmIntArr = [1,3,4,5];

parmIntArr.forEach((item,index)=>{

    console.log(` ${index}  ==> ${item} `);

})

parmIntArr.every()

//对象类型的数组的遍历

var  objban = {'name':'kage','age':'19','weith':30};

var HashMap = require('hashmap');

var map = new HashMap();
var map1 = new HashMap();

map.set('id','ddddd');
map.set('ddd','dddd');

map.forEach((key,value)=>{
    console.log(` map   ${key} == ${value}`);
    map1.set(key,value);
})

map1.forEach((key,value)=>{
    console.log(` map 1  ${key} == ${value}`);

})
//objban.