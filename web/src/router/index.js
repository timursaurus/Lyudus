import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Editor from '../components/Editor.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/news/editor',
        name: 'news-editor',
        component: Editor,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
