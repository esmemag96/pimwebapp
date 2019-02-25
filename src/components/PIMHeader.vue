<template lang="html">
<section id="header">
  <header class="encabezado navbar-static-top sticky-top" role="banner" id="encabezado">
    <div class="container ">
      <div class="logo">
        <router-link :to="{ name: 'home', params: {} }" class="">
          <img class="logoimg" src="../assets/images/pimm.png" alt="Logo del sitio">
        </router-link>
      </div>
      <button type="button" class="boton-buscar" data-toggle="collapse" data-target="#bloque-buscar" aria-expanded="false">
      </button>
      <!-- <button type="button" class="boton-menu hidden-md-up" data-toggle="collapse" data-target="#menu-principal" aria-expanded="false">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button> -->
        <form action="#" id="bloque-buscar" class="collapse">
          <div class="contenedor-bloque-buscar">
            <input type="text" placeholder="Buscar...">
            <input type="submit" value="Buscar">
          </div>
        </form>
        <nav id="menu-principal" class="collapse">
          <ul>
            <li> <router-link :to="{ name: 'home', params: {} }">Inicio</router-link></li>
            <li> <router-link :to="{ name: 'comofunciona', params: {} }">Cómo funciona</router-link></li>
            <li> <router-link :to="{ name: 'artistas', params: {} }">Artistas</router-link></li>
            <li> <router-link :to="{ name: 'contact', params: {} }">Contacto</router-link></li>
            <li class="nrig"> <router-link :to="{ name: 'conectate', params: {} }">Conéctate</router-link></li>
            <li id="registrobtn"><a id="regbtn" href="http://proindiemusic-registro.mybluemix.net/">Regístrate</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </section>
</template>

<script>
export default {
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

  .boton-buscar,
  .boton-menu {
    border: 0;
    font-size: 2rem;
    margin: 0;
    padding: 0 .5rem;
    background: transparent;
    color: #fff; }

  .boton-buscar:focus,
  .boton-menu:focus {
    outline: 0; }

  .boton-buscar {
    margin-left: auto;
    margin-right: .8rem; }


  /*Estilos bloque buscar*/
  #bloque-buscar {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%; }

  .contenedor-bloque-buscar {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 3rem;
    margin: 1rem 0; }

  .contenedor-bloque-buscar input[type="text"] {
    border: 0;
    border-radius: 5px 0 0 5px;
    padding: 1rem;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto; }

  .contenedor-bloque-buscar input[type="submit"] {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    border: 0;
    border-radius: 0 5px 5px 0;
    background: #cd3051;
    color: #fff;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    padding: 0 1rem; }

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
