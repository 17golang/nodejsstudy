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



})()