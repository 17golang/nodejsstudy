/**
 * Created by Administrator on 2017/3/27.
 */
//node.js 基本变量



var  parmInt = 5;
var  parmStr = "      am herer";

var  parmIntArr = [1,3,4,5];
var  objban = {'name':'kage','age':'19','weith':30};

var parmDemArr = [];
parmDemArr.push("name");
parmDemArr.push()

objban.name = "dddddddddddddddddddddd";

console.log( " bean property name is : "  +  objban.name  );

console.log( " hello node.js I am here :  "  +  parmStr  +  parmIntArr  );

const redindg = require('./util1.js');

console.log(  redindg.area(4) );

redindg.copymessage(`I am herer 中文  ${redindg.area(44)}`,1);

const circle = require('./utils2.js');
console.log(`半径为 4 的圆的面积是 ${circle.area(4)}`);



