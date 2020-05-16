import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify' // path to vuetify export

Vue.use(VueRouter)

Vue.config.productionTip = false
import Home from './components/Home'
import FormProposalComponent from './components/FormProposalComponent'
import ProposalComponent from './components/ProposalComponent'
import ProposalDetail from './components/ProposalDetail'
import LoginComponent from './components/LoginComponent'
import ProfileComponent from './components/ProfileComponent'
import RegisterComponent from './components/RegisterComponent'


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Home,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: LoginComponent
        },        {
          path: 'register',
          name: 'Register',
          component: RegisterComponent
        },
        {
          path: 'profile',
          component: ProfileComponent
        },
        {
          path: 'proposals',
          component: ProposalComponent
        },
        {
          path: '/proposals/new',
          component: FormProposalComponent,
          props: {isEditing: false }
        },
        {
          path: '/proposals/:id/',
          component: ProposalDetail
        },
        {
          path: '/proposals/:id/edit',
          component: FormProposalComponent,
          props: {isEditing: true }
        }
      ]
    }

  ]
})

export default router;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

