new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert('Voce está sendo avisado')
        },
        salvarValor(event){
            this.valor = event.target.value
        }
    },
})