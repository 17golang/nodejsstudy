/**
 * Created by fengxiang on 2017/9/19.
 *
 * http://www.jianshu.com/p/tzuPay  这篇文章对NODEJS的异步原理做了比较好的说明
 *
 */

/*
console.info(`  1====   `)

fun1('111')

function fun1( parm1 ) {

    console.info(`  2====   `)
}
*/



//====== 从目前的现象看如果不存在IO的输入和输出或者时间调用(Timer),那还是同步的的,就是存在函数的回调还是同步的


function fun2( prm1 , opt) {

    opt('ddd');

}

//fun2('1',((parm)=>{ for(i=0 ; i<100000;i++) console.info(`  2====   `)}))




var arr = ["ddd","bbb","ccc","ddd"]

arr.forEach((item,index)=>{
    console.info(  item  )
})

console.info(`  1====   `)
