new Vue({
    el: '#desafio',
    data: {
        nome: 'Diogo',
        idade: '18',
        urlImagem:'https://img.freepik.com/fotos-gratis/beagles-filhotes-procurando-algo_1150-18193.jpg',
    },
    methods: {
        multiplicaIdade: function(valor){
            const idadeMultiplicada = this.idade * valor;
            return idadeMultiplicada
        },
        numeroRandom(){
            return  Math.random(1)
        },
        alterarTitulo(event){
            this.nome = event.target.value;
        },
    }
})