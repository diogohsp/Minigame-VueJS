<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto"
		:variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="texto" size="lg" v-model="usuario.nome"
				placeholder="Informe o Nome"></b-form-input>
			</b-form-group>
		</b-card>
		<b-card>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg" v-model="usuario.email"
				placeholder="Informe o Email"></b-form-input>
			</b-form-group>
		</b-card>
		<hr>
		<b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
		<b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2">Obter Usuarios</b-button>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong> {{ usuario.nome }} <br>
				<strong>E-mail: </strong> {{ usuario.email }} <br>
				<strong>ID: </strong> {{ id }} <br>
				<b-button variant="warning" size=lg
				@click="carregar(id)">Alterar</b-button>
				<b-button variant="danger" size="lg" class="ml-2"
				@click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>

import axios from 'axios'

export default {
	// created() {
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'Maria',
	// 		email: 'Maria@gmail.com'
	// 	}).then(res => console.log(res))
	// }

	data(){
		return {
			mensagens: [],
			id: null,
			usuarios: [],
			usuario: {
				nome:'',
				email: '',
			}
		}
	},
	methods: {
		limpar() {
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
		},

		carregar(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},

		//post
		salvar() {
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario).then(() => {
				this.limpar()
				this.mensagens.push({
					texto: 'Operação realizada com sucesso',
					tipo: 'success'
				})
			})
		},

		excluir(id) {
			this.$http.delete(`/usuarios/${id}.json`)
			.then( () => this.limpar())
			.catch (err => {
				this.mensagens.push({
					texto: 'Problema para exlcuir!',
					tipo: 'danger'
				})
			})
		},

 		//get, pode se usar this.$http.get também / importanto axios localmente pode usar simplesmente "axios" mas adicione a url base por completo 
		obterUsuarios(){
			this.$http('usuarios.json')
			.then(res => {
				this.usuarios = res.data
				console.log(res.data)
			})

			// axios('https://curso-vue-54d17-default-rtdb.firebaseio.com/usuarios.json')
			// .then(res => {
			// 	this.usuarios = res.data
			// 	console.log(this.usuarios)
			// })

		},

	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
