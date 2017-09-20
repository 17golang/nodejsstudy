/**
 * Created by fengxiang on 2017/9/19.
 */

var mysql = require('mysql');
//var Q=require('q')

/*var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'bctrend'
});

connection.connect();*/



function handleDisconnect() {



    // Recreate the connection, since
    // the old one cannot be reused.

    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database:'bctrend'
    });

    connection.connect(function(err) {
        // The server is either down
        // or restarting
        if(err) {
            // We introduce a delay before attempting to reconnect,
            // to avoid a hot loop, and to allow our node script to
            // process asynchronous requests in the meantime.
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000);
        }
    });
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        }else{
            throw err;
        }
    });
}

handleDisconnect()


//Promise.all

function getmysql(sqlstring) {

    return new Promise( (resolve,reject)=>{

        connection.query( sqlstring,(err,rows,fields)=>{

            console.info(` 2 --------- `)

            if(err){

                reject(err)

            }else{

               resolve(rows)

            }


        })


    } )

}


(()=>{

    var p1 = getmysql(`select * from bc_company where id = 3`);
    var p2 = getmysql(`select * from bc_company where id = 4`)


    Promise.all([ p1,p2 ]).then( (values) =>{


        return new Promise((resolve,reject)=>{

            //console.log(values)

            if(1!=1)
                reject(0)
            else
                resolve({ "dataarr" : values, "p1":'111',"p2":`ddadf`,"p3":"dddddd" })

        })

    }).then(( objparms =>{

        //console.info( JSON.stringify(objparms.dataarr[0][0].name))

        //console.info( JSON.stringify(objparms.dataarr[0]))

        objparms.dataarr[0].forEach((item,index)=>{
            console.info(item.name)
        })



    })).catch( err=>{
        console.error(err)
    })


})();