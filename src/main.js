import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import QuoteCard from './components/QuoteCard.vue'
import ButtonGen from './components/ButtonGen.vue'

const app = createApp(App)

// Register components globally
app.component('QuoteCard', QuoteCard)
app.component('ButtonGen', ButtonGen)

app.mount('#app')
