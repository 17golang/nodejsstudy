/**
 * Created by fengxiang on 2017/9/20.
 */


var nconf = require('nconf');

var config = require('./network-config.json')

//console.info(config)

for ( let key in config){
    console.info( key )
}


nconf.file({file:'network-config.json'})

console.info(nconf.get('network-config'))

