/**
 * Created by fengxiang on 2017/9/16.
 *
 * 读文件,然后和mysql中的文件比较,把不同的部分写入到文件中
 *
 * 本例子采用 generator的方式来避免 回调陷阱
 *
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

var co = require('co');


//connection.connect();


/*
function * gen() {

    yield  'helow world'
}

let iter = gen();

console.info(iter.next())
*/





function read(filepath) {

    return  new Promise( (resolve,reject)=>{

        console.info(` 1 --------- `);

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

            console.info(` 2 --------- `);

            if(err){

                reject(err)

            }else{

                var website = datarows[0]['website']

                if(  filecontent.toString() != website ){
                    resolve(`${website} text here is here`)
                }

            }


        })


    } )

}


function writerfiles(filecontent) {

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

}


function * testgen ( parm1 , parm2 , parm3){

    console.info(` ${parm1} ==  ${parm2} ==== ${parm3}`)

    let read1 = yield read(`./test.txt`)
    console.info(` read content is ${read1} `)
    let sqlread = yield getmysql(read1);
    console.info(` mysql search result is ${sqlread} `)

    let writerfile = yield writerfiles(sqlread);

    connection.end()
}

/**
 * 关于co() 中的方法,有两种写法  还有一种写法是,直接在括号中写参数  如   co( testgen,'pam','pam2','pam4' )
 */
co( testgen('pam','pam2','pam4') ).catch((err)=>{
    console.error(err.stack)
}).catch((err)=>{
    console.error(err.stack)
    }
)




/*co( function * () {


    let read1 = yield ((filepath)=>{

        return  new Promise( (resolve,reject)=>{

            console.info(` 1 --------- `);

            fs.readFile(filepath,(err,data)=>{

                if(err)

                    reject(err)
                else
                    resolve(data)

            })


        } )

    })('./test.txt');


    console.info(` read content is ${read1} `)
    let sqlread = yield getmysql(read1);
    console.info(` mysql search result is ${sqlread} `)

    let writerfile = yield writerfiles(sqlread);

    connection.end()


}).catch( (err)=>{

    console.error(err.stack)

} )*/

