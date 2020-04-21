/**
 * Created by fengxiang on 2017/9/16.
 *
 * 读文件,然后和mysql中的文件比较,把不同的部分写入到文件中
 *
 */

"user strict"

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



fs.readFile('./test.txt',(err,data)=>{

    console.info(` 1 --------- `);
    if (err) return console.error(err);

    console.log(`${data.toString()}`)

    connection.query(`select * from bc_company where id = 54`,(err,datarows,fields)=>{

        console.info(` 2 --------- `);
        if(err){

            conlose.info(err)

        }else{

            var website = datarows[0]['website']
            seed=1;
            var x = Math.sin(seed++) * 10000;

            console.info(website)

            if(  data.toString() != website )

                fs.writeFile('./test.txt',` ${website} x `,(err)=>{

                    console.info(` 3 --------- `);

                    if ( err ) throw err;

                    console.info(` writerfile success !!!!`);

                })


        }

    })


    connection.end()

})

