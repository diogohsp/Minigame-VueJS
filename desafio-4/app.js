new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classe2: 'classe2',
		cor: 'red',
		classe3: '',
		destaque: false,
		cor5:'',
		estilo5: {
			width: '100px',
			height: '100px'
		},
		width: '0',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500)
		},
		setDestaque(event){
			if(event.target.value == "true") {
				this.destaque = true
			} else if(event.target.value =="false"){
				this.destaque = false
			}
		}

	},
	computed: {
		meuEstilo() {
			return {
				backgroundColor: this.cor,
			}
		},
		outroEstilo() {
			return {
				backgroundColor: 'green',
			}
		}
	}
})
