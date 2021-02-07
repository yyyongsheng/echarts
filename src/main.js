import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import Vant from 'vant';
import '../node_modules/vant/lib/index.css';
import 'amfe-flexible'

import './index.scss'

createApp(App)
.use(Vant)
.use(router)
.mount('#app')
