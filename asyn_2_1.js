/**
 * Created by fengxiang on 2017/9/16.
 *
 * 读文件,然后和mysql中的文件比较,
 *
 * 采用 bluebird 库来构造
 *
 * bluebird 有个缺点,就是无法将多个参数传入到下个方法中,除非重新创造新的模块,这个还是有一定的局限性的
 *
 */



var fs = require('fs');

var mysql = require('mysql');
var Promise = require('bluebird');

//var Q=require('q')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'bctrend'
});

connection.connect();


var fs = Promise.promisifyAll(require('fs'))
var connectionAsync = Promise.promisifyAll(connection)

fs.readFileAsync('./test.txt').then((data,err)=>{

    console.log(data.toString());

    return connectionAsync.queryAsync(`select * from bc_company where id = 3`)


}).then((sqlresult)=>{

    console.info( JSON.stringify(sqlresult) );

}).catch((err)=>{

    console.error(err)
})





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

