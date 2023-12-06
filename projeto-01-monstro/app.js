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

            //resetando logs

            this.logs = []
        },
        atacar(){

            if(!this.vitoria && !this.derrota){

            const danoPlayer = this.dano('player')
            const danoMonstro = this.dano('monstro')
            
            this.registrarlog(`Você deu ${danoPlayer} de dano!`, 'player')
            this.registrarlog(`Você recebeu ${danoMonstro} de dano!`, 'monster')

            }
        },
        ataqueEspecial(){

            if(!this.vitoria && !this.derrota){

            const danoEspecial = this.dano('especialPlayer')
            const danoMonstro = this.dano('monstro')

            this.registrarlog(`Você deu ${danoEspecial} de dano especial!`, 'player')
            this.registrarlog(`Você recebeu ${danoMonstro} de dano!`, 'monster')
        
            }
        },
        dano(fonteDoDano,cls){
            
            //Dano especial Player
            
            if(fonteDoDano === 'especialPlayer'){
                
            let danoCausado = Math.floor(Math.random() * 25)
            console.log("dano especial causado:", danoCausado)
                
            this.monsterLife -= danoCausado;
    
            return danoCausado
            }

            //Dano Player
            if(fonteDoDano === 'player'){

            let danoCausado = Math.floor(Math.random() * 14)
            console.log("dano causado:", danoCausado)
            
            this.monsterLife -= danoCausado;

            return danoCausado;
            
            //Dano Monstro
            }else{

            let danoRecebido = Math.floor(Math.random() * 21)
            console.log("danoRecebido:", danoRecebido)    

            this.playerLife -= danoRecebido;
            
            return danoRecebido;
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

            this.registrarlog(`Você recebeu ${curaRecebida} de cura!`, 'player__cura')
            this.registrarlog(`Você recebeu ${danoRecebido} de dano!`, 'monster')

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