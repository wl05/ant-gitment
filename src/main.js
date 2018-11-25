import Vue from 'vue'
import App from './App.vue'
import AntGitment from './lib/index.js'

Vue.use(AntGitment)
new Vue({
    el : '#app',
    render : h => h(App)
})
