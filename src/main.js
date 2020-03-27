
import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App'
import axios from 'axios'

import './components'

Vue.prototype.$http = axios

Vue.use(Antd)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
