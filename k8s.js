/**
 *     https://github.com/godaddy/kubernetes-client
 *
 *     411321681@qq.com
 *     老冯
 *
 */


const Client=require('kubernetes-client').Client
const { KubeConfig } = require('kubernetes-client')
const kubeconfig = new KubeConfig()
kubeconfig.loadFromFile('/Users/fengxiang/.kube/config')
const Request = require('kubernetes-client/backends/request')

const backend = new Request({ kubeconfig })

//const client = new Client({ version: '1.13' })

const client = new Client({ backend, version: '1.13' })


 async function   test1() {

     const namespaces = await client.api.v1.namespaces.get();

     console.log(JSON.stringify(namespaces))

}

//从服务获取数据
async function get(){

    const deployment = await client.apis.apps.v1.namespaces('default').deployments.get()
    console.log(JSON.stringify(deployment,null,"\t"))

}


//从服务获取数据
async function getpods(){

    let res = await client.api.v1.namespaces('namespace_name').pods();
    console.log(JSON.stringify(res,null,"\t"))

}


//从服务获取数据
async function getservice(){

    let res = await client.api.v1.namespaces('namespace_name').service();
    console.log(JSON.stringify(res,null,"\t"))

}



//test1();
//get();
//getpods();
getservice();