import AntGitment from './AntGitment.vue'
const comment = {
  install: function(Vue) {
    Vue.component(AntGitment.name, AntGitment)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(comment)
}
export default comment
