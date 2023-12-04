new Vue({
    el: '#app',
    data: {
        iniciar_jogo: true,
        vitoria:false,
        derrota:false,
        
        playerLife: 100,
        monsterLife:100,

    },
    methods: {
        iniciarJogo(){
            this.iniciar_jogo = !this.iniciar_jogo
        },
        atacar(){
            let danoCausado = Math.floor(Math.random() * 14)
            console.log("dano causado:", danoCausado)
            

            let danoRecebido = Math.floor(Math.random() * 21)
            console.log("danoRecebido", danoRecebido)

            this.playerLife -= danoRecebido;
            this.monsterLife -= danoCausado;
        },

    },
    computed: {
        gerarNumeroAleatorio(){
           
        },
        derrota(){
            if(this.playerLife <= 0) {
                playerLife = 0
                this.derrota = true
            }
        }
    },
   
})