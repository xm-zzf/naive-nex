import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import NaiveUi from 'naive-ui'
import NexUi from 'naive-nex'

const app = createApp(App)

console.log(NexUi);

app
.use(NaiveUi)
.use(NexUi)
.mount('#app')

console.log(app._context.components);

