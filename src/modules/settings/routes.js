import Settings from './components/Index.vue'
import Profile from './components/Profile.vue'
import Billing from './components/Billing.vue'
import Notifications from './components/Notifications.vue'

const routes = [
  {
    path: '/settings',
    redirect: '/settings/profile',
    component: Settings,
    children: [
      { path: 'profile', component: Profile },
      { path: 'billing', component: Billing },
      { path: 'notifications', component: Notifications }
    ]
  }
]

export default routes
