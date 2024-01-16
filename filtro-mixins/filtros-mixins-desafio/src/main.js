import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contador', function(valor){ 

	const tamanho = valor.length
	return `${valor}(${tamanho})`

})

new Vue({
	render: h => h(App),
}).$mount('#app')
