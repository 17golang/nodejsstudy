/**
 *
 * Created by robertfeng on 2017/3/27.
 *
 * 参考文档   http://nodejs.cn/api/events.html
 *
 */
const util = require('util');

process.on('uncaughtException', (err) => {
    console.log(   `有错误  ${err.stack}` );
});

//1、创建事件发生器类型,不能直接使用需要继承
var EventsEmitter = require('events');
class MeEventsEmitter extends EventsEmitter{}

// 创建事件生成器
const MyEventEmitter = new MeEventsEmitter();

//注册事件监听器,同样的事件可以注册多个事件监听器
MyEventEmitter.on('myevent',()=>{
    console.log(` hello nodejs event I am here  !!!!!`)
});

MyEventEmitter.on('myevent',()=>{
    console.log(` hello nodejs event I am here  !!!!!`)
});


MyEventEmitter.on('error',(err)=>{
    console.log(`有错误   :    ${error.message}`);
})

//== 注册只会被使用一次的事件

MyEventEmitter.once('myeventonce',()=>{
    console.log(" 我只会被调用一次哦   !!!!!!");
})



//== 注册时间也可以有参数哦
MyEventEmitter.on('eventparm',(pam1,pam2,pam3)=>{
   // var d = didd(1,2);
    console.log(` the count is ${ pam1+pam2+pam3}`)
})

MyEventEmitter.on('eventparm1',(pam1,pam2,pam3,functions)=>{

    functions(pam1,pam2,pam3);
});

//////// =============  调用事件  ==================

var eventemit = (a,b,c)=>{
    console.log(`the opt result is ${a+b+c}`);
}

var eventemit1 = (a,b,c)=>{
    console.log(`the opt result is ${a*b*c}`);
}

//调用事件
MyEventEmitter.emit('myevent');
MyEventEmitter.emit('myevent');

MyEventEmitter.emit('myeventonce');
MyEventEmitter.emit('myeventonce');

MyEventEmitter.emit('eventparm',1,2,3);

MyEventEmitter.emit('eventparm1',4,2,3,eventemit);
MyEventEmitter.emit('eventparm1',4,2,3,eventemit1);

console.log(util.inspect(MyEventEmitter.listeners('myevent')));