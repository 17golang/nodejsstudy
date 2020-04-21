/**
 * Created by fengxiang on 2017/9/19.
 */


//会在三个都执行完成时候才会执行一下次操作

/*
( ()=>{

    let p1 = Promise.resolve(1);
    let p2 = 2;
    var p3 = new Promise((resolve, reject) => {

        if(1!=1) reject()

        setTimeout(resolve, 10000, 'foo');
    });

    Promise.all([p1,p2,p3]).then( values=>{
        console.log(values);
    })


} )()



( ()=>{

    var p = Promise.all([1,2,3]);
    // this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
    var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
    // this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
    var p3 = Promise.all([1,2,3, Promise.reject(555)]);

    // using setTimeout we can execute code after the stack is empty
    setTimeout(function(){
        console.log(p);
        console.log(p2);
        console.log(p3);
    });



})()
*/

/*process.on('unhandledRejection', (reason, p) => {
    console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
    // application specific logging, throwing an error, or other logic here
});*/

// reject
/*

(()=>{


    var pro1 = new Promise((resolve,reject)=>{

           //cb(1)
        reject(new Error(`this is a error`))

    })

    Promise.all([pro1]).then((data)=>{

        console.info(`  ${data} `)

    }).catch((err)=>{

        //console.info(`  ======= `)
        console.error( typeof err)

    })



})
*/


/**
 * 可以在 then 方法中加入一个  错误回调函数,将值抓取本次方法的错误
 */

/*
( ()=>{


    let prom1 = new Promise( ( resolve , reject )=>{
        reject(new Error(`this is a error`))
    } )
    let prom2 =  Promise.resolve(2);
    let prom3 =  Promise.resolve(3);

    prom1.then( (data)=>{

        console.info(` success `)
        return prom2

    },(err)=>{
        console.info(` 只抓这个方法的错误 `)
        console.error(err)
    }).then(()=>{
        console.info(`ddddddx`)
        return prom3

    }).then(()=>{

    }).catch((err)=>{
        console.error(err)
    })



} )()
*/


/**
 * 测试 promise的层级和返回值但是有个问题好像和书上说的不一样,在 then方法中,当没有返回promise的时候也可以继续执行then
 *
 * 但是当返回 promise的结果的时候,和最后一个promise的返回值有关系,如果这返回值不是promise的话,那么不能使用then
 **/

var d = ( ()=>{


    let prom1 = new Promise( ( resolve , reject )=>{
        //reject(new Error(`this is a error`))
        resolve(2)
    } )
    let prom_1_1 = new Promise((resolve,reject)=>{
        resolve(` I am prom_1_1`)
    })
    let prom2 =  Promise.resolve(2);
    let prom3 =  Promise.resolve(3);

    return  prom1.then( (data)=>{

        console.info(` success ${data} `)
        return  prom_1_1

    }).then((data1)=>{
        
        console.info(` ddddddx  ${data1} `)
        return 33333
        var co = require('co');

    }).then((data1)=>{

        console.info(`${data1}`)
        return 'I am last then'

    }).catch((err)=>{
        console.error(err)
    })

} )()


d.then((parm)=>{
    console.info(parm)
})
