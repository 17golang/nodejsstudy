var http=require('http');
var url  = require('url')

var httpget = function  ( url ) {

    return new Promise(( resolve,reject)=>{

        http.get( url ,function(req,res){

            var html='';

            req.on('data',function(data){
                html+=data;
            });

            req.on('end',function(){
                resolve(html);
            });

            req.on('error',function(err){
                reject(err);
            });


        });
    })


}

var httppostsimple = function (posturl,port,postData,username,passwd) {


    var postDatastr=JSON.stringify(postData);

    var urlObj = url.parse(posturl)

    var p = username + ":" + passwd;

    var b = new Buffer( p );
    var cred = b.toString('base64');


    var options={
        hostname:urlObj.hostname,
        port:port,
        path: urlObj.pathname,
        method:'POST',
        headers:{

            'Content-Type':'text/plain',
            'Content-Length':Buffer.byteLength(postDatastr),
            'Authorization': `Basic ${cred}`
        }
    }


    return  httppost(options,postDatastr);

}


var httppost = function (options,postData) {

   /* var options={
        hostname:'www.gongjuji.net',
        port:80,
        path:'/',
        method:'POST',
        headers:{
            //'Content-Type':'application/x-www-form-urlencoded',
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            'Content-Length':Buffer.byteLength(postData)
        }
    }*/


    return new Promise(( resolve,reject)=>{


        var buffers = [];
        var req=http.request(options, function(res) {


            res.on('data',function(reposebuffer){

                buffers.push(reposebuffer);
            });
            res.on('end',function(){
                //console.log('No more data in response.********');
                var wholeData = Buffer.concat(buffers);
                var dataStr = wholeData.toString('utf8');
                resolve(dataStr)
            });

            res.on('error',function(err){
                reject(err);
            });

        });

        req.write(postData);
        req.end();


    })



}


exports.httpget = httpget;
exports.httppost =httppost;
exports.httppostsimple = httppostsimple;




