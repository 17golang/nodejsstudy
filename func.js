/**
 * Created by fengxiang on 2017/9/21.
 */


function func() {


    this.objpropert = (a,b)=>{
        return a+b
    }

    func.statfun = (a,b)=>{
        return a-b
    }

}


var _class = class{

    static  stfun(){
        return `dddddssssss`
    }



}


var funobj = new func();

console.info( _class.stfun)

console.info( funobj.objpropert(3,1) )