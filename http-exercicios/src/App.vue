<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="texto" size="lg" v-molde="usuario.nome"
				placeholder="Informe o Nome"></b-form-input>
			</b-form-group>
		</b-card>
		<b-card>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg" v-molde="usuario.email"
				placeholder="Informe o Email"></b-form-input>
			</b-form-group>
		</b-card>
		<hr>
		<b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
	</div>
</template>

<script>
export default {
	// created() {
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'Maria',
	// 		email: 'Maria@gmail.com'
	// 	}).then(res => console.log(res))
	// }

	data(){
		return {
			usuario: {
				nome:'',
				email: '',
			}
		}
	},
	methods: {
		salvar() {
			console.log(this.usuario)
		}
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
