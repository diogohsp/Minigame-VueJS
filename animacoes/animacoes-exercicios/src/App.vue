<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>
		<transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>
		<transition name="slide" appear="">
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>
		<transition appear="" enter-active-class="animated bounce" leave-active-class="animated shake">
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>
		
		<hr>

		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>
		<transition appear="" :name="tipoAnimacao">
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>

		<transition appear="" :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warning">{{ msg }}</b-alert>
		</transition>

		<hr>

		<button @click="exibir2 = !exibir2">Alternar</button>
		<transition
		:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"
			
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div class="caixa" v-if="exibir2"></div>
		</transition>
		
		<hr>
		<div class="mb-4">
			<b-button class="mr-2" variant="primary" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
			<b-button variant="secondary" @click="componenteSelecionado = 'AlertaAdvertencia'">Alerta</b-button>
		</div>
		<transition name="fade" mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition>

		<hr>

		<b-button @click="adicionarAluno" mb-4>Adicionar Aluno</b-button>
		<transition-group name="slide" tag="div">
			<b-list-group v-for="(aluno, i) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
			</b-list-group>
		</transition-group>

	</div>
</template>

<script>

import AlertaAdvertencia from './AlertaAdvertencia.vue'
import AlertaInfo from './AlertaInfo.vue'

export default {
	
	components: {AlertaAdvertencia, AlertaInfo},

	beforeMount() {
		this.tipoAnimacao = 'slide'
	},

	data(){
		return {
			alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo'],
			msg: 'Mensagem a ser exibida!',
			exibir: true,
			exibir2: true,
			tipoAnimacao:null,
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo',
		}
	},
	methods: {
		adicionarAluno() {
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno(indice){
			this.alunos.splice(indice, 1)
		},

		animar(el,done,negativo){

			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + 
				(negativo ? -rodada * 10 : rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada > 30) {
					clearInterval(temporizador)
					done()
				}
			},20)
		},

		beforeEnter(el){
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done){
			this.animar(el,done,false)
		},
		// afterEnter(el){
		// 	console.log('afterEnter')
		// },
		// enterCancelled(){
		// 	console.log('enterCancelled')
		// },
		beforeLeave(el){
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done){
			this.animar(el,done,true)
		},
	// 	afterLeave(el){
	// 		console.log('afterleave')
	// 	},
	// 	leaveCancelled(){
	// 		console.log('leaveCancelled')
	// 	}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.caixa{
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

.fade-enter{
	opacity: 0;
}

.fade-enter-active{
	transition: opacity 2s;
}

.fade-enter-to {
	opacity: 1;
}

.fade-leave{
	opacity: 1;
}

.fade-leave-active{
	transition: opacity 2s;
}

.fade-leave-to{
	opacity: 0;
}

@keyframes slide-in {
	from { transform: translateY(40px)}
	to { transform: translateY(0px)}
}

@keyframes slide-out {
	from { transform: translateY(0px)}
	to { transform: translateY(40px)}
}

.slide-enter-active{
	animation: slide-in 2s ease;
}

.slide-leave-active {
	position: absolute;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to{
	opacity: 0;
}

.slide-enter-active, .slide-leave-active{
	transition: opacity 2s;
}

.slide-move {
	transition: transform 1s;
}

</style>
