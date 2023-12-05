new Vue({
    el: '#app',
    data: {
        iniciar_jogo: true,
        
        vitoria:false,
        derrota:false,
        
        playerLife: 100,
        monsterLife:100,

        logs: []
        

    },
    methods: {
        iniciarJogo(){
            //iniciar jogo
            this.iniciar_jogo = !this.iniciar_jogo

            //reset de vitoria e derrota

            this.derrota = false
            this.vitoria = false
            
            //iniciando com vida maxima

            this.playerLife = 100
            this.monsterLife = 100
        },
        atacar(){

            if(!this.vitoria && !this.derrota){

            let danoCausado = Math.floor(Math.random() * 14)
            console.log("dano causado:", danoCausado)
            

            let danoRecebido = Math.floor(Math.random() * 21)
            console.log("danoRecebido:", danoRecebido)

            this.playerLife -= danoRecebido;
            this.monsterLife -= danoCausado;

            this.registrarlog(`${}oi`)

            }
        },
        ataqueEspecial(){

            if(!this.vitoria && !this.derrota){

            let danoCausado = Math.floor(Math.random() * 20)
            console.log("dano especial causado:", danoCausado)

            let danoRecebido = Math.floor(Math.random() * 13)
            console.log("dano recebido:", danoRecebido)

            this.playerLife -= danoRecebido;
            this.monsterLife -= danoCausado;

            }
        },
        curar(){

            if(!this.vitoria && !this.derrota){

            let curaRecebida = Math.floor(Math.random() * 14)
            console.log("Cura recebida:", curaRecebida)

            let danoRecebido = Math.floor(Math.random() * 10)
            console.log("Dano recebido:", danoRecebido)

            this.playerLife += curaRecebida;
            this.playerLife -= danoRecebido;

            }
        },
        desistir(){
            //retomar ao lobby e desistir
            this.iniciar_jogo = !this.iniciar_jogo

            //reset de derrota
            if(this.vitoria == true){
                this.derrota == false
            }else{
            this.derrota = true
            }
        },
        registrarlog(text, cls){
            this.logs.unshift({text, cls})
        },

    },
    computed: {

    },
    watch: {
        playerLife: function(){
            const vidaDoPlayer = this.playerLife;
            const vidaDoMonstro = this.monsterLife;

            //Vida minima e maxima
            if(vidaDoPlayer <= 0) {
                this.playerLife = 0
            }else if(vidaDoPlayer > 100){
                this.playerLife = 100;
            }
            
            //Condição de vitoria

            if(vidaDoMonstro <= 0 && vidaDoPlayer > 0) {
                this.vitoria = true
            }else{
                this.vitoria = false
            }
            
        },
        monsterLife: function(){
            const vidaDoMonstro = this.monsterLife;
            const vidaDoPlayer = this.playerLife; 

            //Vida minima

            if(vidaDoMonstro <= 0){
                this.monsterLife = 0
            }

            //Condição de derrota

            if(this.playerLife <= 0 && this.monsterLife > 0){
                this.derrota = true
            }else{
                this.derrota = false
            }

        },
        
    }
   
})