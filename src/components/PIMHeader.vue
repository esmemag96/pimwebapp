<template lang="html">
<section id="header">
  <header class="encabezado fixed-top" role="banner" id="encabezado">
    <div class="container">
        <div class="logo">
          <router-link :to="{ name: 'home', params: {} }" class="">
            <img class="logoimg" src="../assets/images/pimm.png" alt="Logo del sitio">
          </router-link>
        </div>
        <nav id="menu-principal" class="d-none d-lg-block">
          <ul class="row">
            <li class="col"> <router-link :to="{ name: 'home', params: {} }">Inicio</router-link></li>
            <li class="col" v-if="authenticated"> <router-link :to="{ name: 'artistas', params: {} }">Artistas</router-link></li>
            <li class="col"> <router-link :to="{ name: 'contact', params: {} }">Contacto</router-link></li>
            <li v-if="!authenticated" class="nrig col"> <router-link :to="{ name: 'conectate', params: {} }">Conéctate</router-link></li>
            <li v-if="authenticated" class="nrig col"> <router-link :to="{ name: 'conectate', params: {} }" v-on:click.native="logout()">Logout</router-link></li>
            <li v-if="!authenticated" id="registrobtn" class="col"><router-link :to="{ name: 'registrate', params: {} }">Regístrate</router-link></li>
          </ul>
        </nav>
        <b-button v-b-toggle.collapse1 variant="" class="buttonMenu d-sm-block d-lg-none">
          <i class="fa fa-bars"></i>
        </b-button>
        <b-collapse id="collapse1" class="">
          <b-card class="menuSmall">
            <nav id="menu-principal" class="">
              <ul class="row">
                <li class="col-12"> <router-link :to="{ name: 'home', params: {} }">Inicio</router-link></li>
                <li class="col-12" v-if="authenticated"> <router-link :to="{ name: 'artistas', params: {} }">Artistas</router-link></li>
                <li class="col-12"> <router-link :to="{ name: 'contact', params: {} }">Contacto</router-link></li>
                <li v-if="!authenticated" class="nrig col-12"> <router-link :to="{ name: 'conectate', params: {} }">Conéctate</router-link></li>
                <li v-if="authenticated" class="nrig col-12"> <router-link :to="{ name: 'conectate', params: {} }" v-on:click.native="logout()">Logout</router-link></li>
                <li v-if="!authenticated" id="registrobtn" class="col-12"><router-link :to="{ name: 'registrate', params: {} }">Regístrate</router-link></li>
              </ul>
            </nav>
          </b-card>
        </b-collapse>
      </div>
    </header>
  </section>
</template>

<script>
export default {
  props:{
    authenticated:{ type: Boolean, default: false},
  },
  data() {
      return {

      }
  },
  methods: {
      logout() {
          this.$parent.authenticated = false;
          this.$router.replace({ name: "home" });
      }
  }
}
</script>

<style lang="css">
.encabezado {
  background: #2d142c;
  color: #fff;
  padding: .5rem 0;
  -webkit-transition: all .5s ease;
          transition: all .5s ease; }

.encabezado.fondo-menu {
  background: #2d142c;
  padding: 1rem 0; }

.encabezado .container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap; }

.encabezado .logo img {
width: 150px;
height: auto; }

.navbar, .navbar-inverse {
	border-radius: 0;
	border: none;
	margin-bottom: 0;
	min-height: 80px;
}

.nav li {
	display: inline;
	color: white;
}

.navbar-inverse .navbar-nav > li > a {
	color: #ffffff;
	font-family: Lato;
	font-size: 1.7em;
	font-weight: 300;
	padding: 30px 25px 33px 25px;
}

.navbar-inverse .navbar-nav li a:hover {
	background-color: #444444;
	transition: 0.7s all linear;
	height: 100%;
}
#registrobtn {
  border: #cd3051;
  border-style: solid;
  border-radius: 40px;
}
#registrobtn a{
  color: #cd3051;
  margin-top: 8px;
  border-top: none !important;
}
.menuSmall{
  background: #2d142c !important;
  border: none;
  width: 100%!important;
}
.buttonMenu{
  background-color: transparent !important;
  border: none !important;
  font-size: 35px !important;
}
#menu-principal {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 100%;
      -ms-flex: 1 1 100%;
          flex: 1 1 100%;
}
#menu-principal ul li{
    border-color: #cd3051;
    color: #cd3051;
}

#menu-principal ul {
  padding: 0;
  list-style: none;
  margin: 1rem 0 0 0; }

#menu-principal ul a {
  display: block;
  padding: .8rem 0;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  border-top: 1px solid #8c8888;
  text-decoration: none; }

#menu-principal ul a:hover,
#menu-principal ul li.active a {
  color: #cd3051; }

.texto-encabezado {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center; }
/*CAMBIOS AQUI*/
.display-4{
    font-size: 1.5rem;
}

.texto-encabezado .display-4 {
  margin-top: 4rem; }

.texto-encabezado .btn-primary {
  margin-top: 1rem; }

.btn-primary {
  color: #fff;
  background-color: #ee4540;
  border-color: transparent;
    border-radius: 30px;
  -webkit-transition: all .5s ease;
          transition: all .5s ease; }

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active:hover {
  background-color: #4e2178;
  border-color: transparent; }

.flecha-bajar a {
  display: inline-block;
  color: #fff;
  font-size: 4rem;
  -webkit-animation: flecha-animada 2s ease-in-out infinite;
          animation: flecha-animada 2s ease-in-out infinite; }
</style>
