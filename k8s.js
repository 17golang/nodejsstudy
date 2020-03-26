
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

     console.log(namespaces)

}


test1();