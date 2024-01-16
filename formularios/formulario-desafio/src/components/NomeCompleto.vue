<template>
    <div>
        <Rotulo nome="Nome"> 
            <input type="text" placeholder="Nome" :value="value.nome" @input="alterarNome">
        </Rotulo>
        <Rotulo nome="Sobrenome">
            <input type="text" placeholder="Sobrenome" :value="value.sobrenome" @input="alterarSobreNome">
        </Rotulo>
    </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
    components: {Rotulo},

    props: {
        value: {
            type: Object,
            required: true,
        }
    },

    methods: {
        alterarNome(event){
            this.$emit('input', {nome: event.target.value, sobrenome: this.value.sobrenome})
        },
        alterarSobreNome(event){
            this.$emit('input', {nome: this.value.nome, sobrenome: event.target.value})
        }
    }

}
</script>

<style>

</style>