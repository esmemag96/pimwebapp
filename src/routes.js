import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Artistas from './components/Artistas.vue'
import Conectate from './components/Conectate.vue'
import Registrate from './components/Registrate.vue'


const routes = [
  {path: '/home', component:Home, name:'home'},
  {path: '/contacto', component:Contact, name:'contact'},
  {path: '/artistas', component:Artistas, name:'artistas'},
  {path: '/conectate', component:Conectate, name:'conectate'},
  {path: '/registrate', component:Registrate, name:'registrate'},
]

export default routes
