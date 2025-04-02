import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'
import './assets/main.css'

import { createApp } from 'vue'
import { useHead } from "@vueuse/head"
import App from './App.vue'

createApp(App).mount('#app')
useHead({
    title: 'Meu Portfolio Pessoal | Masao Muraoka Neto',
    meta: [
        { name: 'description', content: 'Portfolio Profissional de Masao Muraoka Neto' },
        { property: 'og:title', content: 'Meu Portfólio Profissional' },
        { property: 'og:description', content: 'Confira meus trabalhos e projetos' },
        { property: 'og:image', content: './assets/img/photo.jpg' }
    ]
})