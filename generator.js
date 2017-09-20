/**
 * Created by fengxiang on 2017/9/18.
 */



/*
function * generatorFn() {
    console.info(` look ma I was suspended`)
}

var generator = generatorFn()

setTimeout( ()=>{

    generator.next();

} ,  20000 )*/


/*
function * channel() {

    var name = yield " hello what is you name ? ";
    return `well hi there ` + name
}

var gen = channel()

console.info(gen.next().value)
console.info(gen.next('billy'))


function * iter() {
    for ( var i = 0 ; i<20 ; i++) yield  i

}

for ( var val of iter()){
    console.info( val )
}*/


function fib (n) {
    var current = 0, next = 1, swap
    for (var i = 0; i < n; i++) {
        swap = current, current = next
        next = swap + next
    }
    return current
}

console.info(fib(10))