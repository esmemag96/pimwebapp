<!--suppress ALL -->
<template lang="html">
  <section id="home">
    <div class="bienvenidos">
          <div class="texto-encabezado text-center">
            <div class="container">
              <h4 class="display-4 wow fadeIn textBold">¿No sabes a dónde ir con tu proyecto?</h4>
              <h4 class="wow fadeIn textRegular" data-wow-delay=".3s">Nosotros te ayudamos
                <span style="color:#cd3051">GRATIS</span></h4>
                <h4 class="display-4 wow fadeIn textBold">¿Buscas oportunidades en festivales y eventos<br>a nivel nacional e internacional?</h4>
                <h4 class="display-4 wow fadeIn textRegular">¡Forma parte de la comunidad!</h4>
                <router-link :to="{ name: 'registrate', params: {} }" class="btn btn-primary btn-lg textBold" >ÚNETE AHORA </router-link>
              </div>
            </div>
            <div class="flecha-bajar text-center">
              <a data-scroll href="#agencia2"> <i class="fa fa-angle-down" aria-hidden="true"></i></a>
            </div>
          </div>
          <div class="agencia py-1" id="agencia2">
            <div class="container">
              <div style="display: flex; align-items: center;justify-content: center" class="">
                <p id="margen-top-p"style="width: auto;text-align: center;font-size: 28.5px;font-family: Nexa-Heavy;"class="wow fadeIn">Forma parte de nuestra comunidad<br>completamente <span style="color: #ee4540">GRATIS!</span></p>
              </div>
              <div style="display: flex; align-items: center;justify-content: center" class="">
                <p style="width: auto;text-align: center;font-size: 28.5px;font-family: Nexa-Light;"class="wow fadeIn">Contamos con el apoyo de <span style="color: #ee4540">más de 500 festivales,</span><br>venues mercados y organizaciones en la industria musical</p>
              </div>
              <div style="margin-bottom: 40px;" class="carrouselContainer">
                <carousel :autoplay="false" :nav="false" :dots="false":number=4 :center="true">
                  <img class="img-carousel" src="../assets/images/festivals_camden.png">
                  <img class="img-carousel" src="../assets/images/festivals_cordoba.png">
                  <img class="img-carousel" src="../assets/images/festivals_dells.png">
                  <img class="img-carousel" src="../assets/images/festivals_fringe.png">
                  <img class="img-carousel" src="../assets/images/festivals_mty.png">
                  <img class="img-carousel" src="../assets/images/festivals_ruido.png">
                  <img class="img-carousel" src="../assets/images/festivals_sanmarcos.png">
                  <img class="img-carousel" src="../assets/images/festivals_sxsw.png">
                </carousel>
              </div>
              <div class="col-md-16  wow fadeIn" data-wow-delay=".6s">
                <ul class="listaH">
                  <li>México</li>
                  <li>Peru</li>
                  <li>Estados Unidos</li>
                  <li>Argentina</li>
                  <li>Colombia</li>
                  <li>Dinamarca</li>
                </ul>
              </div>

              <div class="flecha-bajar text-center">
                <a data-scroll href="#trabajaId"> <i class="fa fa-angle-down" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div class="trabaja py-1" id="trabajaId">
            <div class="container">
              <div style="display: flex; align-items: center;justify-content: center" class="">
                <p style="width: auto;text-align: center;font-size: 28.5px; font-family: Nexa-Heavy;"class=" wow fadeIn">TRABAJA. CRECE. APRENDE.</p>
              </div>
              <div style="display: flex; align-items: center;justify-content: center" class="">
                <p style="width: auto;text-align: center;font-size: 28.5px;font-family: Nexa-Regular;"class=" wow fadeIn">Pro Indie Music busca conectar la industria musical en un solo espacio, <br>democratizando las oportunidades en la industria musical.</p>
              </div>
              <div style="display: flex; align-items: center;justify-content: center" class="">
                <p id="margen-top-p" style="width: auto;text-align: center;font-size: 28.5px;font-family: Nexa-Heavy;margin-top: 120px;"class=" wow fadeIn">Desarrolla tu carrera</p>
              </div>
              <div class="flecha-bajar text-center">
                <a data-scroll href="#misionId"> <i class="fa fa-angle-down" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div class="mision py-1" id="misionId">
            <div class="container">
              <div style="display: flex; align-items: center;justify-content: center" class="">
                <p  style="width: auto;padding-top: 80px;font-size: 23.5px;font-family: Nexa-Heavy"class=" wow fadeIn">Leer nuestra misión </p>
              </div>
              <div class="row2">
                <div class="col-md-4 col-xl-3 ">
                  <img class="img-mision wow zoomIn" data-wow-delay=".4s" src="../assets/images/pim_metrics.png" alt="La agencia">
                  <p class="wow fadeIn" style="font-family: Nexa-Heavy;margin-top: 46px;font-size: 28.5px;color: #2d142c;text-align: center">Conoce tu nivel<br>en la industria<br>musical</p>
                </div>
                <div class="col-md-4 col-xl-3 ">
                  <img class="img-mision wow zoomIn" data-wow-delay=".4s" src="../assets/images/pim_goals.png" alt="La agencia">
                  <p class="wow fadeIn" style="font-family: Nexa-Heavy;margin-top: 46px;font-size: 28.5px;color:#2d142c;text-align: center">Obten un<br>plan de trabajo gratuito</p>
                </div>
                <div class="col-md-4 col-xl-3 ">
                  <img class="img-mision wow zoomIn" data-wow-delay=".4s" src="../assets/images/pim_connect.png" alt="La agencia">
                  <p class="wow fadeIn" style="font-family: Nexa-Heavy;margin-top: 46px;font-size: 28.5px;color:#2d142c;text-align: center;white-space: nowrap;">Contacta con<br>festivales y eventos<br>a nivel nacional<br>e internacional</p>
                </div>
              </div>
            </div>
          </div>
          <a data-scroll class="ir-arriba" href="#encabezado"><i class="fa  fa-arrow-circle-up" aria-hidden="true"> </i> </a>
  </section>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name: 'app',
  components: { carousel },
}
</script>

<style lang="css">
html {
  font-size: 15px;
}

body {
  font-family: 'Open Sans', sans-serif;
  color: #111111; }
/******TODO LO QUE JUAN AGREGUE**********/

@font-face{
    font-family: Nexa-Light;
    src: url("../assets/fonts/Nexa-Light.otf");
}
@font-face
{
    font-family: Nexa-Heavy;
    src:url("../assets/fonts/NexaHeavy.otf");
}
@font-face
{
    font-family:Nexa-Regular;
    src:url("../assets/fonts/NexaRegular.otf");
}
li a
{
    font-family: Nexa-Light;
}
.logoimg{
  width: 15%;
}
.agencia,.trabaja,.mision
{

    color: #fff;
    display: flex;
    align-items: center;
    height: 100vh;
}
.mision
{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to bottom, #2d142c 0%,#2d142c 50%,#000000 50%,white 50%,white 100%);
}
.trabaja, .trabaja p{
    background: #c72c41;
    color: white;
}
p#margen-top-p{
    margin-top: 40px;
    margin-bottom: 40px;
}
#menu-principal ul li a#regbtn{
    color: #cd3051;
}
#menu-principal ul li a#regbtn:hover
{
    color: #cd3051;
    border-bottom: transparent;

}
.textBold{
  font-family: Nexa-Heavy;
  font-size: 10px;
}
.textRegular{
  font-family: Nexa-Regular;
  margin-bottom: 50px;
}
@media (max-width: 500px){
.agencia
{
    background: #cd3051;
    color: #fff;
    display: flex;
    align-items: center;
    display: none
    }}
#menu-principal ul li#registrobtn {
    border: #cd3051;
    border-style: solid;
    border-radius: 40px;

}
#agencia2{
    background: #2d142c;
}
.listaH{
    margin-top: 0px;

  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0;
}
.listaH li{
    display: inline-block;
    font-family: Nexa-Heavy;
    color: #ee4540;
  font-size: 30px;
  padding-left: 20px;
    padding-right: 20px;
}
.row{
    display: flex;
    align-content: center;
    margin-left: 20px;
    justify-content: center;
}
.img-mision
{
    width: 200;
    height: 200px;
    margin: auto;
}
.img-txt-mision
{
    color:black;
    text-align: center;
    padding-right: 70PX;
}
.img-carousel
{
    width: 231px !important;
    margin-left:0 !important;
    margin-right:0 !important;
}
.owl-item{
  width: auto !important;
}
.row2
{
    display: flex;
    align-content: center;
    margin-left: 20px;
    justify-content: center;
    padding-top: 120px;
}
@media(max-width:450px)
{
    .mision
    {
        display: none;
    }
}
/*********************/

.bienvenidos {
  background: url("../assets/images/landing_carousel_1.jpg") no-repeat center top;
  color: #fff;
  background-size: cover;
  background-attachment: fixed !important;
  height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }

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

/*Estilos para el boton: buscar y menu*/
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
          flex: 1 1 100%; }
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
    font-size: 1.5rem !important;
}

.texto-encabezado .display-4 {
  margin-top: 4rem; }

.texto-encabezado .btn-primary {
  margin-top: 1rem; }

.btn-primary {
  color: #fff;
  background-color: #ee4540 !important;
  border-color: transparent !important;
    border-radius: 30px !important;
  -webkit-transition: all .5s ease;
          transition: all .5s ease; }

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active:hover {
  background-color: #4e2178 !important;
  border-color: transparent !important;
}

.flecha-bajar a {
  display: inline-block;
  color: #fff;
  font-size: 4rem;
  -webkit-animation: flecha-animada 2s ease-in-out infinite;
          animation: flecha-animada 2s ease-in-out infinite; }

@-webkit-keyframes flecha-animada {
  from {
    -webkit-transform: translateY(0);
            transform: translateY(0); }
  50% {
    -webkit-transform: translateY(6px);
            transform: translateY(6px); }
  to {
    -webkit-transform: translateY(0);
            transform: translateY(0); } }

@keyframes flecha-animada {
  from {
    -webkit-transform: translateY(0);
            transform: translateY(0); }
  50% {
    -webkit-transform: translateY(6px);
            transform: translateY(6px); }
  to {
    -webkit-transform: translateY(0);
            transform: translateY(0); } }
/*-----------------------------
SECCION AGENCIA
------------------------------*/
.agencia {
  background: #cd3051;
  color: #fff; }

.agencia img {
  width: 80%;
  margin: 0 auto;
  display: block; }

/*----------------------------
SECCION TU MEJOR ELECCI├ôN
----------------------------*/
.tu-mejor-eleccion h2 span {
  color: #cd3051; }

.tu-mejor-eleccion ul,
.tu-mejor-eleccion ul li {
  list-style: none; }

.tu-mejor-eleccion ul li .fa {
  font-size: 2.3rem;
  background: #009500;
  border-radius: 50%;
  width: 4.7rem;
  height: 4.7rem;
  line-height: 4.7rem;
  color: #fff; }

.tu-mejor-eleccion ul li .contenedor-eleccion h4 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: .8rem; }

.tu-mejor-eleccion ul li {
  min-height: 9rem; }

/*-------------------------------
SECCION SERVICIOS
--------------------------------*/


.servicios article {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 1rem 0; }

.servicios img {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 60px;
      -ms-flex: 0 0 60px;
          flex: 0 0 60px;
  overflow: hidden;
  margin-right: 1rem; }

.servicios h3 {
  margin: 0;
  font-size: 1.1rem;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto; }

.servicios h3 a {
  color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  text-decoration: none; }

.servicios h3 a::after {
  content: "\f054";
  font-family: FontAwesome;
  font-size: 2rem;
  margin-left: 1rem;
  opacity: .5;
  position: relative;
  left: 0;
  -webkit-transition: all .5s ease;
          transition: all .5s ease; }

.servicios h3 a:hover::after {
  left: -.5rem;
  opacity: 1;
  color: #cd3051; }

/*---------------------------------
SECCION ├ÜLTIMOS PROYECTOS
------------------------------------*/
.ultimos-proyectos a {
  text-decoration: none; }

.ultimos-proyectos a h4 {
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: #111111; }

.ultimos-proyectos .container {
  padding-left: 0;
  padding-right: 0; }

/*----------------------------------------
SECCION PIE DE PAGINA
-----------------------------------------*/
.piedepagina {
  background: #111111;
  color: #fff;
  text-align: center;
  font-size: .9rem; }

.piedepagina .redes-sociales {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0; }

.piedepagina .redes-sociales a {
  color: #fff;
  font-size: 2rem;
  margin: 0 .5rem;
  opacity: .7;
  -webkit-transition: all .5s ease;
          transition: all .5s ease; }

.piedepagina .redes-sociales a:hover {
  opacity: 1; }

.ir-arriba {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  font-size: 3rem;
  color: #cd3051;
  text-decoration: none;
  z-index: 99999;
  line-height: 0;
  display: none;
  -webkit-transition: all .5s ease;
          transition: all .5s ease; }

.ir-arriba:hover,
.ir-arriba:focus {
  outline: 0;
  text-decoration: none;
  color: #fff; }

/*-------------------------------------------
ESTILOS PAGINA NOSOTROS
--------------------------------------------*/
.paginas-internas .bienvenidos {
  height: 50vh; }

.paginas-internas .ruta {
  background: #cd3051;
  color: #fff; }

.paginas-internas .ruta a {
  color: #fff;
  text-decoration: underline; }

.paginas-internas .ruta a:hover {
  text-decoration: none; }

.paginas-internas .panel .panel-heading {
  font-size: 1.2rem; }

.paginas-internas .panel .panel-heading a {
  background: #cd3051;
  color: #fff;
  display: block;
  padding: 1rem;
  border-radius: 5px;
  text-decoration: none;
  -webkit-transition: all .5s ease;
          transition: all .5s ease; }

.paginas-internas .panel .panel-heading a:hover {
  background: #4e2178;
  color: #fff; }

/*-------------------------------------------
ESTILOS PAGINA SERVICIOS
--------------------------------------------*/
.paginas-internas .lista-servicios {
  background: #009500; }

.paginas-internas .lista-servicios .item-servicios {
  background: #ffffff;
  text-align: center;
  border: 5px solid #057705;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 1rem; }

.paginas-internas .lista-servicios .item-servicios .fa {
  font-size: 6rem;
  color: #cd3051;
  margin-bottom: 1rem;
  -webkit-transition: all 1s ease;
          transition: all 1s ease; }

.paginas-internas .lista-servicios .item-servicios:hover .fa {
  -webkit-transform: rotateY(360deg);
          transform: rotateY(360deg);
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d; }

/*---------------------------------------------
EMPIEZAN LAS MEDIAS QUERIES
--------------------------------------------*/
@media (min-width: 868px) {
  #menu-principal {
    height: auto !important;
    display: block;

    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    margin-left: 15px;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1; }
    @media (min-width: 768px){
    .nrig{
        margin-left: 230px;
    }
    }


  #menu-principal ul {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 0 0 0 0; }

  #menu-principal ul li a {
    padding: .8rem;
    text-transform: capitalize;
    margin: 0 .3rem;
    border-top: 0px;
    border-bottom: 4px solid transparent;
    -webkit-transition: all 0.5s ease;
            transition: all 0.5s ease; }

  #menu-principal ul li.active a,
  #menu-principal ul li a:hover {
    color: #cd3051;
    border-bottom: 4px solid; }

  .boton-buscar {
    margin-left: 1rem;
    margin-right: 0;
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2; }

  #bloque-buscar {
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
        -ms-flex-order: 3;
            order: 3;
    position: absolute;
    width: 20rem;
    right: 3rem;
    top: 2.8rem;
    -webkit-transition: all 0.5s ease;
            transition: all 0.5s ease; }

  .servicios article {
    margin: 1rem 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    text-align: center; }

  .servicios img {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 160px;
        -ms-flex: 0 0 160px;
            flex: 0 0 160px;
    overflow: hidden;
    margin-right: 0;
    margin-bottom: 1rem;
    -webkit-transition: all 1s ease;
            transition: all 1s ease; }

  .servicios article:hover img {
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d; }

  .servicios h3 a::after {
    content: ""; }

  .servicios h3 {
    margin: 0 0 .5rem 0;
    font-size: 1.5rem;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    width: 100%; }

  .servicios h3 a {
    display: block;
    width: 100%; }

  .servicios p {
    width: 100%; }

  .servicios .btn-secondary {
    margin-top: auto; }

  .paginas-internas .lista-servicios .col-md-4 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }

  .paginas-internas .lista-servicios .item-servicios {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column; }

  .paginas-internas .lista-servicios .item-servicios .btn-primary {
    margin-top: auto; } }
@media (min-width: 992px) {
  html {
    font-size: 16px; }

  .bienvenidos {
    background: url("../assets/images/landing_carousel_1.jpg") no-repeat center top;
    background-size: cover; }

  .tu-mejor-eleccion ul li {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 7rem; }

  .tu-mejor-eleccion ul li .fa {
    text-align: center;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    margin-right: 1rem;
    -webkit-transition: all 1s ease;
            transition: all 1s ease; }

  .tu-mejor-eleccion ul li:hover .fa {
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    background: #cd3051; }

  .contenedor-eleccion {
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 0px;
        -ms-flex: 1 0 0px;
            flex: 1 0 0px; }

  .tu-mejor-eleccion ul li .contenedor-eleccion h4 {
    margin-top: 0;
    font-size: 1rem; }

  .tu-mejor-eleccion ul:first-child .fa {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1;
    margin-left: 1rem;
    margin-right: 0; }

  .tu-mejor-eleccion ul li p {
    font-size: .85rem;
    width: 100%; }

  .servicios {
    background: url("../assets/images/fondo-servicios-grande.jpg") no-repeat center center;
    background-size: cover; } }

</style>
