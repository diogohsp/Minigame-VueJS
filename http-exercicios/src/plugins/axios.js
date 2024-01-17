import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL = 'https://curso-vue-54d17-default-rtdb.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-54d17-default-rtdb.firebaseio.com/',
            headers: {
                    "Authorization" : "abc123"
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []
            // for(let chave in res.data) {
            //     array.push({ id: chave, ...res.data[chave] }) // "..." significa 'todos os atributos com essa chave especifica' na verdade é 'nome: res.data[chave].nome, email: res.data[chave].email'
            // }
            // res.data = array
            return res
        }, error => Promise.reject(error))
    }
})