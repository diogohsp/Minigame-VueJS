import Vue from "vue";
import Vuex from 'vuex'

import carrinho from "./modules/carrinho";
import parametros from "./modules/parametros";

import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({

    // agora o state se comporta assim:

    // state: {
    //     carrinho: {
    //         produtos: []
    //     },
    //     parametros: {
    //         quantidade: 0,
    //         preco: 0,
    //     }
    // }

    state: {
        nome: 'Maria',
        sobrenome: 'Silva',
    },
    // getters,
    getters: {
        ...getters
    },

   modules: { carrinho, parametros }
})