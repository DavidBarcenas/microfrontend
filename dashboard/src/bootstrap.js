import { createApp } from 'vue'
import Dashboard from './components/dashboard.vue'


// Mount function to start up the app
const mount = (el) => {
  if(el) {
    createApp(Dashboard).mount(el)
  }
}

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = mount(document.getElementById('_dashboard-root'))

  if (devRoot) {
    mount(devRoot)
  }
}

// We are running through container
// and we should export the mount function
export { mount }