import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Artistas from './components/Artistas.vue'
import Conectate from './components/Conectate.vue'
import Registrate from './components/Registrate.vue'
import RegistraBanda from './components/RegistraBanda.vue'

const routes = [
  {path: '/', component:Home, name:'home'},
  {path: '/contacto', component:Contact, name:'contact', props: true},
  {path: '/artistas', component:Artistas, name:'artistas', props: true},
  {path: '/conectate', component:Conectate, name:'conectate', props: true},
  {path: '/registrate', component:Registrate, name:'registrate', props: true},
  {path: '/registraBanda', component:RegistraBanda, name:'registraBanda', props: true},
]

export default routes
