import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/table-min',
            component: () => import('./views/tableMin.vue')
        },
        {
            path: '/table-full',
            component: () => import('./views/tableFull.vue')
        }
    ]
})