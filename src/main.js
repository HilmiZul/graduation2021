import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import '../src/assets/css/style.p5.css'
import '../src/assets/css/style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import '../src/assets/libraries/p5.js'
// import '../src/assets/libraries/p5.dom.js'
// import '../src/assets/drop.js'
// import '../src/assets/sketch.js'

Vue.config.productionTip = false

AOS.init()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
