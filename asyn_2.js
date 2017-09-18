/**
 * Created by fengxiang on 2017/9/16.
 *
 * 读文件,然后和mysql中的文件比较,把不同的部分写入到文件中
 *
 */



var fs = require('fs');

var mysql = require('mysql');
//var Q=require('q')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'bctrend'
});

connection.connect();



function read(filepath) {

    return  new Promise( (resolve,reject)=>{

        fs.readFile(filepath,(err,data)=>{

            if(err)

                reject(err)
            else
                resolve(data)

        })


    } )

}


function getmysql(filecontent) {

    return new Promise( (resolve,reject)=>{

        connection.query(`select * from bc_company where id = 3`,(err,datarows,fields)=>{

            if(err){

                reject(err)

            }else{

                var website = datarows[0]['website']

                if(  filecontent.toString() != website ){
                    resolve(`${website} text`)
                }

            }


        })


    } )

}


function writerfiles(filecontent) {

    return new Promise((resole,reject)=>{

        fs.writeFile('./test.txt',` ${filecontent} x `,(err)=>{

            if ( err )

                 reject(err);

            else{

                console.info(` writerfile success !!!!`);
                resole(`writerfile success !!!!`)
            }




        })

    })

}


/*
read('./test.txt').then((content)=>{

    return getmysql(content)

}).then((mysqldata)=>{
    return writerfiles(mysqldata)
}).then((writerresult)=>{

    console.info(writerresult)

}).catch((err)=>{

    console.error(err)
})
*/



/**
 * 这是另外一种写法
 *
 * 直接把函数的定义和使用组合在一起的写法,如果函数不是复用的,那么建议采用这样的写法,但是这样的写法的有个一个明显的缺点,
 * 对从初学这比较难以阅读,但是多搞几次就习惯了。
 *
 */



( (filepath) => {

    return  new Promise( (resolve,reject)=>{

        console.info(` 1 --------- `);
        fs.readFile(filepath,(err,data)=>{

            if(err)

                reject(err)
            else
                resolve(data)

        })


    } )
})('./test.txt').then( (content)=>{

   return   ( (filecontent)=>{

       return new Promise( (resolve,reject)=>{

            connection.query(`select * from bc_company where id = 3`,(err,datarows,fields)=>{

                console.info(` 2 --------- `);

                if(err){

                    reject(err)

                }else{

                    var website = datarows[0]['website']

                    if(  filecontent.toString() != website ){
                        resolve(`${website} text`)
                    }

                    connection.end()

                }


            })


        } )

    } )(content);

}   ).then( (mysqldata)=>{

   return  ( (filecontent)=>{

        return new Promise((resole,reject)=>{

            fs.writeFile('./test.txt',` ${filecontent} x `,(err)=>{

                console.info(` 3 --------- `);

                if ( err )

                    reject(err);

                else{

                    console.info(` writerfile success !!!!`);
                    resole(`writerfile success !!!!`)
                }




            })

        })

    } )( mysqldata );




} ).then((writeresult)=>{


    console.info(` ${writeresult}   hear  `)


}).catch((err)=>{

    console.error(err)
})





/*fs.readFile('./test.txt',(err,data)=>{

    if (err) return console.error(err);

    console.log(`${data.toString()}`)

    connection.query(`select * from bc_company where id = 54`,(err,datarows,fields)=>{

        if(err){

            conlose.info(err)

        }else{

            var website = datarows[0]['website']
            seed=1;
            var x = Math.sin(seed++) * 10000;

            console.info(website)

            if(  data.toString() != website )

                fs.writeFile('./test.txt',` ${website} x `,(err)=>{

                    if ( err ) throw err;

                    console.info(` writerfile success !!!!`);

                })


        }

    })


    connection.end()

})*/

