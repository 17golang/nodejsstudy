/**
 * Created by fengxiang on 2017/6/20.
 */


var mysql = require('mysql');
//var Q=require('q')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'bctrend'
});


connection.connect();


connection.query(" select * from bc_company where id = 1 ", function(err, rows, fields  ) {


    console.info(` the query1 is ${rows.length} `)

    if (err){

        console.info(err)

    }else{

        connection.query(" select * from bc_company where id = 100 ", function(err, rows1, fields  ) {

            // if (err) throw err;
            if (err){
                console.info(err)
            }

            //console.info(` the query1 is ${rows.length} `)
            console.info(` the query2 is ${rows1.length} `)


        });


    }

    console.info('the solution ')
    // return  rows.length;

});


//查询

/*
var nums

function query(){
    connection.query(sql, function(err, rows, fields  ) {
        // if (err) throw err;
        if (err){
            console.info(err)
        }

        // console.log(  `The solution is: ${rows.length }  `  );
        console.info('the solution ')
        // return  rows.length;
    });
}

function query1(sql){
    return new Promise(function (resolve,reject){
        connection.query(sql, function(err, rows, fields  ) {
            // if (err) throw err;
            if (err){
                reject(err)
            }

            // console.log(  `The solution is: ${rows.length }  `  );
            console.info('the solution ')
            // return  rows.length;
            resolve(rows)
        });
    })
}

query1(' select * from bc_company where id=100').then(data=>{
    console.info(data)
    return query1(' select * from bc_company where id=101')
}).then(data=>{
    console.info('aaaaaaaa')
    console.info(data)
}).then(a=>{
    connection.end();
}).catch(err=>{
    console.info(err)
})
*/


// Promise.all([
//     query1(' select * from bc_company where id=100'),
//     query1(' select * from bc_company where id=101')
// ]).then(datas=>{
//     console.info(datas)
// })

console.log(` messge  `)






/*connection.beginTransaction(function(err) {

    if (err) { throw err; }

    connection.query('INSERT INTO posts SET title=?', title, function(err, result) {


        if (err) {
            return connection.rollback(function() {
                throw err;
            });
        }

        var log = 'Post ' + result.insertId + ' added';

        connection.query('INSERT INTO log SET data=?', log, function(err, result) {

            if (err) {
                return connection.rollback(function() {
                    throw err;
                });
            }
            connection.commit(function(err) {
                if (err) {
                    return connection.rollback(function() {
                        throw err;
                    });
                }
                console.log('success!');
            });
        });
    });
});*/


//关闭连接
// connection.end();