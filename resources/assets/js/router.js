import Vue from 'vue'
import VueRouter from 'vue-router'

import AuthService from './services/auth'



import VeeValidate from 'vee-validate';
/*
 |--------------------------------------------------------------------------
 | Admin Views
 |--------------------------------------------------------------------------|
 */
/* Admin Layout */
import adminLayout from './views/layouts/admin-layout'

/* Admin Pages */
import dashboard from './views/admin/dashboard'


/*
 |--------------------------------------------------------------------------
 | Authentication Views
 |--------------------------------------------------------------------------|
 */
/* Authentication Layout */
import loginLayout from './views/layouts/login-layout'

/* Authentication Pages */
import Login from './views/auth/Login'
import Register from './views/auth/Register'


/* Error pages */
import NotFoundPage from './views/errors/404'

/*
 |--------------------------------------------------------------------------
 | Frontend Views
 |--------------------------------------------------------------------------|
 */


import publicLayout from './views/layouts/front-layout'
import Home from './views/front/Home'
import FormElements from './views/front/FormElements'

Vue.use(VeeValidate);
Vue.use(VueRouter)

const routes = [
    
    

    /*
     |--------------------------------------------------------------------------
     | Frontend Routes
     |--------------------------------------------------------------------------|
     */

    {
        path: '/', component: publicLayout,
        children: [
            {
                path: '/',
                component: Home,
                name: 'home'
            },
            {
                path: '/form-elements',
                component: FormElements,
                name: 'form_elements'
            },
        ]
    },

    /*
     |--------------------------------------------------------------------------
     | Admin Backend Routes
     |--------------------------------------------------------------------------|
     */
    {
        path: '/app', component: adminLayout,  // Change the desired Layout here
        meta: { requiresAuth: true },
        children: [

            //Dashboard
            {
                path: 'dashboard',
                component: dashboard,
                name: 'dashboard',
            }
            
        ]
    },

    /*
     |--------------------------------------------------------------------------
     | Auth & Registration Routes
     |--------------------------------------------------------------------------|
     */

    {
        path: '/', component: loginLayout,
        children: [
            {
                path: 'login',
                component: Login,
                name: 'login'
            },
            {
                path: 'register',
                component: Register,
                name: 'register'
            },
        ]
    },

    // DEFAULT ROUTE
    {   path: '*', component : NotFoundPage }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {

    // If the next route is requires user to be Logged IN
    if (to.matched.some(m => m.meta.requiresAuth)){

        return AuthService.check().then(authenticated => {
            if(!authenticated){
                return next({ path : '/login'})
            }

            return next()
        })
    }

    return next()
});

export default router