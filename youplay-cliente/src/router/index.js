import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRegistro from '../components/LoginRegistro.vue'
import Home from '../components/Home.vue'
import Inicio from '../components/Inicio.vue'
import CrearEquipos from '../components/CrearEquipo.vue'
import MisEquipos from '../components/MisEquipos.vue'
import EditarEquipo from '../components/EditarEquipo.vue'
import AñadirIntegrantes from '../components/AñadirIntegrantes.vue'
import BuscarEquipo from '../components/BuscarEquipo.vue'
import MisPartidos from '../components/MisPartidos.vue'
import CrearPartido from '../components/CrearPartido.vue'
import EstadisticasPartido from '../components/EstadisticasPartido.vue'
import CrearTorneo from '../components/CrearTorneo.vue'





Vue.use(VueRouter)

const routes = [
    {
      path: '/login',
      name: 'LoginRegistro',
      component: LoginRegistro
    },
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/equipos/crear',
      name: 'CrearEquipos',
      component: CrearEquipos
    },
    {
      path: '/usuario/:idUsuario/equipos',
      name: 'MisEquipos',
      component: MisEquipos
    },
    {
      path: '/equipos/editar/:idEquipo',
      name: 'EditarEquipo',
      component: EditarEquipo
    },
    {
      path: '/equipos/integrantes/:idEquipo',
      name: 'AñadirIntegrantes',
      component: AñadirIntegrantes
    },
    {
      path: '/equipos',
      name: 'BuscarEquipo',
      component: BuscarEquipo
    },
    {
      path: '/usuario/:idUsuario/partidos',
      name: 'MisPartidos',
      component: MisPartidos
    },
    {
      path: '/partidos/crear',
      name: 'CrearPartido',
      component: CrearPartido
    },
    {
      path: '/partidos/:idPartido',
      name: 'EstadisticasPartido',
      component: EstadisticasPartido
    },
    {
      path: '/torneos/crear',
      name: 'CrearTorneo',
      component: CrearTorneo
    },
]
  
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
  
export default router