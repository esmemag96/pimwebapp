<template lang="html">
  <section id="artistas">
    <div class="sk-cube-grid" style="display: none" v-bind:class="{activo: isLoading }">
      <div class="sk-cube sk-cube1"></div>
      <div class="sk-cube sk-cube2"></div>
      <div class="sk-cube sk-cube3"></div>
      <div class="sk-cube sk-cube4"></div>
      <div class="sk-cube sk-cube5"></div>
      <div class="sk-cube sk-cube6"></div>
      <div class="sk-cube sk-cube7"></div>
      <div class="sk-cube sk-cube8"></div>
      <div class="sk-cube sk-cube9"></div>
    </div>
    <div style="display: none" v-bind:class="{activo: !isLoading }">
      <div class="infoContainer">
        <div class="row">
          <div class="col-md-9 col-sm-12">
            <h1 class="artistName">{{artista}}</h1>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="circle text-center">
              <span class="artistInfo">NIVEL</span><br>
              <span class="artistInfo">{{nivel}}</span>
            </div>
            <span class="artistInfo text-center">{{tipoPlan}}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <img class="rounded-circle img-fluid" v-bind:src='image' alt="">
          </div>
          <div class="col-md-8 col-sm-12">
            <h4 class="artistInfo text-left"> {{artista}}</h4>
            <h4 class="artistInfo text-left"> {{city}}</h4>
            <h4 class="artistInfo text-left"> {{paises}}</h4>
          </div>
        </div>
      </div>
      <div class="moreInfocontainer">
        <div class="row text-center">
          <span class="description">{{descripcion}}</span>
        </div>
        <div class="row imgContainerExtra">
          <img class="extraImg" src="../assets/images/PIM_international_purple.png" alt="">
          <div class="row">
            <h5 >Artista con <br> PROYECCIÓN <br> INTERNACIONAL</h5>
          </div>
        </div>
        <div class="row text-center attributesContainer">
          <div class="imgContainer">
            <img class="attributesImg" src="../assets/images/PIM_opportunity_purple.png" alt=""><br>
            <span>Oportunidades</span>
          </div>
          <div class="imgContainer">
            <img class="attributesImg" src="../assets/images/PIM_coins_purple.png" alt=""><br>
            <span>Pago Pendiente</span>
          </div>
          <div class="imgContainer">
            <img class="attributesImg" src="../assets/images/PIM_recommend_purple.png" alt=""><br>
            <span>Recomendaciones</span>
          </div>
        </div>
      </div>
      <div class="col-3 mediaPlayer">
        <span class="mediaTitle">MEDIA <i class="fas fa-play"></i></span>
        <audio controls>
          <source src="../assets/song.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <audio controls>
          <source src="../assets/song.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <audio controls>
          <source src="../assets/song.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
      <div class="cotizacionWrapper">
        <!-- <div class="col-3 mediaPlayer">
          <img class="" src="../assets/images/media2.png" alt=""><br>
        </div> -->
        <div class="col-9 cotizacionContainer">
          <h3 class="row">Cotización y trayectoria artística</h3>
          <div class="row text-center attributesContainer">
            <div class="imgContainer">
              <img class="cotizacionImg" src="../assets/images/PIM_spotlights_orange.png" alt=""><br>
              <span class="cotizacionNum">{{numConciertos}} </span> <br>
              <span class="cotizacionText"> CONCIERTOS</span>
            </div>
            <div class="imgContainer">
              <img class="cotizacionImg" src="../assets/images/PIM_level_orange.png" alt=""><br>
              <span class="cotizacionNum">{{numCiudades}}</span> <br>
              <span class="cotizacionText"> CIUDADES</span>
            </div>
            <div class="imgContainer">
              <img class="cotizacionImg" src="../assets/images/PIM_money_orange.png" alt=""><br>
              <span class="cotizacionNum">${{numPresentaciones}}K </span> <br>
              <span class="cotizacionText"> PRESENTACIÓNES INTERNACIONALES</span>
            </div>
          </div>
        </div>
      </div>
      <div class="statsContainer">
        <div class="row socialContainer">
          <div class="col-6 socialMedia">
            <div class="row">
              <div class="socialIcons">
                <i class="fab fa-facebook-f"></i> <span> +{{likes}} likes</span> <br>
                <i class="fab fa-twitter"></i> <span> {{comentarios}}% + comentarios</span><br>
                <i class="fab fa-instagram"></i><span> {{seguidores}}% + seguidores</span> <br>
              </div>
            </div>
          </div>
          <div class="col-6 planPremium">
            <span class="cotizacionText">PLAN PREMIUM</span> <br>
            <span class="cotizacionNum">{{porcentajeNivel}}%</span>
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 57%"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row nextStepsContainer">
        <div class="col-7">
          <span class="cotizacionText">Hola, {{artista}}!</span><br>
          <span class="cotizacionText">{{review}}</span><br>
          <span class="cotizacionText">Ahora, <br> ¿Qué te gustaría hacer?</span><br>
        </div>
        <div class="col-5 text-center">
          <button class="nextStepOption">
            {{step1}}
          </button>
          <button class="nextStepOption">
            {{step2}}
          </button>
          <button class="nextStepOption">
            {{step3}}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  /* eslint-disable */
  import * as ApiService from '../ApiService';
  import * as OAuth from '../OAuth2';

  let apiService = new ApiService.ApiService();
  let oauth = new OAuth.OAuth2();

  export default {
    name: 'artistas',
    data(){
      return{
        isLoading: true,
        artista: '',
        nivel: 6,
        tipoPlan: 'PLAN PREMIUM',
        descripcion: '',
        numConciertos: 0,
        numCiudades:0,
        numPresentaciones: 0,
        likes: 0,
        comentarios:65,
        seguidores:0,
        porcentajeNivel:57,
        paises: 0,
        image: '',
        photoBack: '',
        city: '',
        step1: '',
        step2: '',
        step3: '',
        review: ''
      }
    },
    beforeRouteEnter(to, from, next) {
      oauth.getToken().then((obj) =>{
        if(obj.access_token){
          next(vm => {vm.setData(obj)})
        }else{
          this.$parent.authenticated = false;
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('profile');
          localStorage.removeItem('expires_in');
          this.$router.replace({ name: "home" });
        }
      });
    },
    methods: {
      setData(obj) {
        return apiService.get({
          url: `${this.$store.state.server}/api/v1/artist/user`,
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${obj.access_token}`
          }
        }).then((respuesta) => {
          console.log("Artist", respuesta);
          this.isLoading = !this.isLoading;
          this.city = respuesta.data.city;
          this.artista = respuesta.data.bandName;
          this.image = respuesta.data.photo;
          this.descripcion = respuesta.data.description;
          this.numConciertos = respuesta.data.concertsPerYear;
          if(respuesta.data.places) {
            this.numCiudades = respuesta.data.places.split(",").length;
          }
          this.numPresentaciones = respuesta.data.internationalConcerts;
          this.likes = respuesta.data.facebookFollowers;
          this.seguidores = respuesta.data.youtubeMustViewVideo;
          this.paises = respuesta.data.places;
          this.photoBack = respuesta.data.photoBack;
          this.step1 = respuesta.data.step1;
          this.step2 = respuesta.data.step2;
          this.step3 = respuesta.data.step3;
          this.review = respuesta.data.review;
        }).catch((err) => {
          console.log("Salio un error", err)
        })
      }
    }
  }
</script>

<style lang="css">
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
  .activo{
    display: inherit!important;
  }
  #artistas{
    font-family:Nexa-Regular;
  }
  .infoContainer{
    height: 500px;
    background-image: url('../assets/images/profile_image.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-y: center;
  }
  .artistName{
    color: white;
    font-weight: 400;
    font-size: 4.5rem;
    vertical-align: middle;
  }
  .artistInfo{
    color: #ff2e33;
  }
  .circle{
    background-color: white;
    width: 111px;
    height: 108px;
    font-size: 29px;
    border-radius: 69px;
    line-height: 57px;
    margin-bottom: 0.5em;
  }
  .infoContainer .row{
    padding-top: 5em;
  }
  .rounded-circle{
    height: 324px;
    width: 325px;
    border: #ff2e33 18px solid;
    margin-left: 5em;
  }
  .moreInfocontainer{
    background-color: white;
    height: 500px;
  }
  .description{
    width: 530px;
    color: #2d142c;
    font-size: 25px;
    text-align: justify;
    margin-top: 18px;
  }
  .attributesContainer{
    margin-top: 10em;
  }
  .attributesImg{
    height: 80px;
    width: 82px;
  }
  .imgContainer{
    margin-right: 2em;
    margin-left: 2em;
  }
  .extraImg{
    height: 153px;
    width: 158px;
  }
  .imgContainerExtra{
    float: right;
  }
  .imgContainerExtra h5{
    color: #ff2e33;
  }
  .cotizacionWrapper{
    background-color: #510a32;
    height: 800px;
  }
  .mediaTitle{
    font-size: 30px;
    font-weight: 600;
    margin-left: 12px;
  }
  .mediaPlayer img{
    width: 85%;
    margin-left: 6.5em;
    margin-top: -10em;
  }
  .mediaPlayer{
    background-color: #ee433e;
    height: auto;
    margin-left: 6.5em;
    margin-top: -10em;
    border-radius: 19px;
    color: white;
    padding: 18px;
  }
  .cotizacionContainer{
    color: white;
    margin-left: auto;
    margin-top: -9em;
  }
  .cotizacionImg{
    height: 137px;
    width: 125px;
  }
  .cotizacionText{
    font-size: 30px;
    font-weight: 600;
  }
  .cotizacionNum{
    font-size: 75px;
    font-weight: 600;
  }
  .cotizacionContainer .attributesContainer{
    margin-top: 7em;
  }
  .statsContainer{
    color: white;
    height: 400px;
    background-color: #c72c41;
  }
  .socialIcons .fab{
    font-size: 32px;
    background-color: white;
    color: #d8043c;
    border-radius: 21px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 42px;
    margin-bottom: 1em;
    margin-right: 1em;
  }
  .progress{
    width: 28em !important;
    border-radius: 24px !important;
    background-color: #ff2b32 !important;
    border: white 2px solid !important;
    height: 3em !important;
  }
  .progress-bar{
    background-color: #580030 !important;
  }
  .socialContainer{
    padding-top: 5em;
  }
  .nextStepsContainer{
    padding: 30px;
    margin:0;
    color: white;
    height: 500px;
    background-color: #280c2a;
  }
  .nextStepOption{
    border: #ff2b32 4px solid;
    border-radius: 27px;
    width: 75%;
    font-size: 25px;
    height: 27%;
    margin-bottom: 1em;
    line-height: 72px;
    background-color: #280c2a;
    color: white;
  }
</style>
