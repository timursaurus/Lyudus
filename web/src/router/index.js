import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Editor from '../components/Editor.vue'
import ArticleEditor from '../pages/ArticleEditor.vue'

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
    },
    {
        path: '/article/editor',
        name: 'article-editor',
        component: ArticleEditor,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
